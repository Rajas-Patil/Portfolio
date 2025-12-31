import React, { useState, useEffect } from 'react';

// Minimax Algorithm for Unbeatable AI
const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

const minimax = (board, depth, isMaximizing) => {
    const winner = calculateWinner(board);
    if (winner === 'X') return 10 - depth;
    if (winner === 'O') return depth - 10;
    if (!board.includes(null)) return 0;

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                board[i] = 'X';
                const score = minimax(board, depth + 1, false);
                board[i] = null;
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                board[i] = 'O';
                const score = minimax(board, depth + 1, true);
                board[i] = null;
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
};

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [score, setScore] = useState({ player: 0, ai: 0 });
    const [gameOver, setGameOver] = useState(false);

    const handleClick = (i) => {
        if (board[i] || calculateWinner(board) || gameOver) return;

        // Player Move (O)
        const newBoard = [...board];
        newBoard[i] = 'O';
        setBoard(newBoard);

        // Check end
        if (calculateWinner(newBoard) || !newBoard.includes(null)) {
            // Handle game over via effect
        } else {
            // AI Move (X) with delay
            setTimeout(() => makeAiMove(newBoard), 400);
        }
    };

    const makeAiMove = (currentBoard) => {
        let bestScore = -Infinity;
        let move;
        for (let i = 0; i < 9; i++) {
            if (currentBoard[i] === null) {
                currentBoard[i] = 'X';
                const score = minimax(currentBoard, 0, false);
                currentBoard[i] = null;
                if (score > bestScore) {
                    bestScore = score;
                    move = i;
                }
            }
        }
        if (move !== undefined) {
            const newBoard = [...currentBoard];
            newBoard[move] = 'X';
            setBoard(newBoard);
        }
    };

    useEffect(() => {
        const winner = calculateWinner(board);
        if (winner) {
            setGameOver(true);
            if (winner === 'O') setScore(s => ({ ...s, player: s.player + 1 }));
            if (winner === 'X') setScore(s => ({ ...s, ai: s.ai + 1 }));
        } else if (!board.includes(null)) {
            setGameOver(true);
        }
    }, [board]);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setGameOver(false);
    };

    return (
        <section className="ttt-section">
            <div className="ttt-container">
                {/* Left Side: The Board */}
                <div className="board-wrapper">
                    <div className="game-board">
                        {board.map((cell, i) => (
                            <div key={i} className="cell" onClick={() => handleClick(i)}>
                                {cell === 'O' && <span className="mark o-mark">O</span>}
                                {cell === 'X' && <span className="mark x-mark">X</span>}
                                {!cell && !gameOver && <div className="cell-hover"></div>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Info & Text */}
                <div className="game-info">
                    <div className="wave-decoration">
                        <svg width="80" height="40" viewBox="0 0 100 50" fill="none" stroke="#111" strokeWidth="2">
                            <path d="M10 25 Q 20 10 30 25 T 50 25 T 70 25 T 90 25" />
                            <path d="M10 35 Q 20 20 30 35 T 50 35 T 70 35 T 90 35" />
                        </svg>
                    </div>

                    <div className="badge-pill">
                        <span className="icon">✱</span> TIC TAC TOE
                    </div>

                    <h2 className="game-title">Can You Beat Me?</h2>
                    <p className="game-subtitle">Bet U Can't ;)</p>

                    <div className="scoreboard">
                        <div className="score-item">
                            <span className="player-label">You (O):</span>
                            <span className="score-value">{score.player}</span>
                        </div>
                        <div className="score-item">
                            <span className="player-label">Rajas (X):</span>
                            <span className="score-value">{score.ai}</span>
                        </div>
                    </div>

                    {gameOver && (
                        <button className="play-again-btn" onClick={resetGame}>
                            Play Again
                        </button>
                    )}
                </div>
            </div>

            <style>{`
        .ttt-section {
           width: 100%;
           padding: 100px 0;
           background-color: #ffffff;
           display: flex;
           justify-content: center;
           align-items: center;
           font-family: 'Inter', sans-serif;
        }

        .ttt-container {
           display: flex;
           align-items: center;
           gap: 120px;
           max-width: 1200px;
           width: 90%;
           
           /* The Container Style from Image */
           background-color: #eff6ff;
           background-image: 
               linear-gradient(#dbeafe 1px, transparent 1px),
               linear-gradient(90deg, #dbeafe 1px, transparent 1px);
           background-size: 40px 40px;
           background-position: center;
           
           padding: 80px;
           border-radius: 50px; /* "proper circular radius bordar" */
           box-shadow: 
               0 20px 50px -12px rgba(0, 0, 0, 0.1),
               0 0 0 1px rgba(0,0,0,0.02); /* Subtle outline */
        }

        .board-wrapper {
           position: relative;
        }

        .game-board {
           display: grid;
           grid-template-columns: repeat(3, 110px);
           grid-template-rows: repeat(3, 110px);
           gap: 16px; /* Spacing between "cards" */
           
           /* Remove box border to let cells stand alone like cards */
           border: none;
           background-color: transparent; 
        }

        .cell {
           width: 110px;
           height: 110px;
           
           /* "Cards" look: Dark Blue Gradient */
           background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%); /* Fallback/Base */
           background: linear-gradient(135deg, #1e3a5f 0%, #4a729d 100%);  /* Closer to image dark blue/grey */

           border-radius: 16px; /* Slightly rounded cards */
           display: flex;
           justify-content: center;
           align-items: center;
           cursor: pointer;
           position: relative;
           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15);
           transition: transform 0.2s, box-shadow 0.2s;
        }

        .cell:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
        }

        .mark {
             font-size: 50px;
             font-weight: 700;
             /* Text contrast against dark card */
             color: #fff;
             filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }
        .o-mark { color: #fff; }
        .x-mark { color: #8ecae6; } /* Light blue for contrast */

        .game-info {
           display: flex;
           flex-direction: column;
           align-items: center;
           text-align: center;
           color: #1a1a1a;
        }

        .wave-decoration {
           margin-bottom: 24px;
           margin-left: 0;
           opacity: 0.8;
           color: #1e3a5f; /* Match theme */
        }
        .wave-decoration svg {
            stroke: #1e3a5f;
        }
        
        .badge-pill {
           background: #fff;
           color: #1e3a5f;
           padding: 8px 16px;
           border-radius: 50px;
           font-size: 11px;
           font-weight: 700;
           letter-spacing: 1px;
           display: flex;
           align-items: center;
           gap: 6px;
           border: none;
           margin-bottom: 24px;
           box-shadow: 0 4px 12px rgba(0,0,0,0.08); 
        }

        .game-title {
           font-size: 48px;
           font-weight: 800;
           font-family: 'Inter', sans-serif; 
           margin-bottom: 8px;
           letter-spacing: -1px;
           color: #1e3a5f; /* Dark blue text */
        }

        .game-subtitle {
           font-family: 'Playfair Display', serif; 
           font-style: italic;
           font-size: 24px;
           font-weight: 500;
           color: #556c86;
           margin-bottom: 40px;
        }

        .scoreboard {
           display: flex;
           gap: 40px;
           font-size: 18px;
           font-weight: 600;
           color: #1e3a5f;
        }

        .play-again-btn {
           margin-top: 30px;
           padding: 12px 30px;
           background: #1e3a5f; /* Dark Blue */
           color: #fff;
           border-radius: 8px;
           font-weight: 600;
           transition: transform 0.2s;
           box-shadow: 0 4px 12px rgba(30, 58, 95, 0.3);
        }
        .play-again-btn:hover {
           transform: translateY(-2px);
           background: #152c4a;
        }

        @media (max-width: 1024px) {
           .ttt-container { gap: 80px; }
        }

        @media (max-width: 900px) {
           .ttt-container { 
               flex-direction: column; 
               gap: 50px; 
               padding: 50px 30px;
               width: 90%;
               max-width: 600px;
           }
           .game-info { align-items: center; text-align: center; }
           .wave-decoration { margin-left: 0; }
           .game-title { font-size: 40px; }
        }

        @media (max-width: 600px) {
           .ttt-section { padding: 60px 0; }
           .ttt-container { padding: 30px 20px; border-radius: 30px; }
           
           /* Scale Board Down */
           .game-board {
              grid-template-columns: repeat(3, 80px);
              grid-template-rows: repeat(3, 80px);
              gap: 10px;
           }
           .cell { width: 80px; height: 80px; border-radius: 12px; }
           .mark { font-size: 36px; }
           
           .game-title { font-size: 32px; }
           .game-subtitle { font-size: 20px; }
           
           .scoreboard { gap: 24px; font-size: 16px; }
        }

        @media (max-width: 380px) {
           /* Even smaller phones */
           .game-board {
              grid-template-columns: repeat(3, 70px);
              grid-template-rows: repeat(3, 70px);
              gap: 8px;
           }
           .cell { width: 70px; height: 70px; }
        }`}</style>
        </section>
    );
};

export default TicTacToe;
