(function () {
    'use strict';

    angular
        .module('myApp.tennis')
        .service('tennisService',[
            function () {
                var self = this;
                var Score = {   SroceLoveAll : 'Love-All',
                                SroceFifteenAll : 'Fifteen-All',
                                SroceThirtyAll : 'Thirty-All',
                                SroceFortyAll : 'Forty-All',
                                SroceLove : 'Love',
                                SroceFifteen : 'Fifteen',
                                SroceThirty : 'Thirty',
                                SroceForty : 'Forty',
                                SroceDeuce : 'Deuce',
                                SroceAdvantagePlayer1 : 'Advantage player1',
                                SroceAdvantagePlayer2 : 'Advantage player2',
                                WinForPlayer1: 'Win for player1',
                                WinForPlayer2: 'Win for player2' };

                self.getScore = function( towPlayers ) {
                    var score = "";
                    var isSameScore = towPlayers.player1Score === towPlayers.player2Score;
                    var isBothOverFourScore = towPlayers.player1Score >=4 || towPlayers.player2Score>=4;

                    if (isSameScore) {
                        score = calculateScoreWhenSameScore(towPlayers.player1Score);
                    } else if (isBothOverFourScore) {
                        score = calculateScoreOverFour(towPlayers.player1Score, towPlayers.player2Score);
                    } else {
                        score = calculateScoreNormal(towPlayers.player1Score, towPlayers.player2Score);
                    }

                    return score;
                };

                self.calculateScoreWhenSameScore = function( m_score1 ) {
                    return self.getScoreFormList(m_score1, 0);
                };

                self.calculateScoreOverFour = function( m_score1, m_score2 ) {
                    var score = "";
                    var minusResult = m_score1-m_score2;

                    if ( minusResult === 1 ) {
                        score = Score.AdvantagePlayer1;
                    }
                    else if ( minusResult === -1 ) score = Score.SroceAdvantagePlayer2;
                    else if ( minusResult >= 2 ) score = Score.WinForPlayer1;
                    else score = Score.WinForPlayer2;

                    return score;
                };

                self.calculateScoreNormal = function( m_score1, m_score2 ) {
                    var score = "";
                    var tempScore = 0;

                    for ( var i=1; i<3; i++ )
                    {
                        if ( i === 1 ) {
                            tempScore = m_score1;
                        } else {
                            score += "-";
                            tempScore = m_score2;
                        }

                        self.getScoreFormList(tempScore, 10);
                    }

                    return score;
                };

                self.getScoreFormList = function( m_score1, isNormal ) {
                    var score = 0;

                    switch (m_score1 + isNormal)
                    {
                        case 0:
                            score = SroceLoveAll;
                            break;
                        case 1:
                            score = SroceFifteenAll;
                            break;
                        case 2:
                            score = SroceThirtyAll;
                            break;
                        case 3:
                            score = SroceFortyAll;
                            break;
                        case (0 + isNormal):
                            score += SroceLove;
                            break;
                        case (1 + isNormal ):
                            score += SroceFifteen;
                            break;
                        case (2 + isNormal):
                            score += SroceThirty;
                            break;
                        case (3 + isNormal):
                            score += SroceForty;
                            break;
                        default:
                            score = SroceDeuce;
                            break;
                    }

                    return score;
                };
            }
        ]);
})();