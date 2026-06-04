'use client';

import { useEffect, useRef, useState } from 'react';

export default function GoldDiggerGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game state
    let animationId: number;
    let coins = 0;
    let goldBricks = 0;
    let catches = 0;
    let level = 1;

    // Player
    const player = {
      x: 50,
      y: 300,
      width: 40,
      height: 50,
      velocityY: 0,
      jumping: false,
      speed: 5,
      boosted: false
    };

    // Men to catch
    const men: Array<{x: number, y: number, width: number, height: number, speed: number, caught: boolean}> = [];
    for (let i = 0; i < 5; i++) {
      men.push({
        x: 200 + i * 150,
        y: 350,
        width: 35,
        height: 45,
        speed: 2,
        caught: false
      });
    }

    // Police
    const police: Array<{x: number, y: number, width: number, height: number, speed: number}> = [];
    for (let i = 0; i < 2; i++) {
      police.push({
        x: 400 + i * 200,
        y: 350,
        width: 35,
        height: 45,
        speed: 1.5
      });
    }

    // Coins
    const coinsList: Array<{x: number, y: number, width: number, height: number, collected: boolean}> = [];
    for (let i = 0; i < 10; i++) {
      coinsList.push({
        x: 150 + i * 100,
        y: 250 - Math.random() * 100,
        width: 20,
        height: 20,
        collected: false
      });
    }

    // Castle
    const castle = {
      x: 1400,
      y: 280,
      width: 100,
      height: 120
    };

    // Keyboard state
    const keys: {[key: string]: boolean} = {};
    
    window.addEventListener('keydown', (e) => {
      keys[e.key] = true;
      
      if ((e.key === ' ' || e.key === 'ArrowUp') && !player.jumping) {
        player.velocityY = -12;
        player.jumping = true;
      }
    });
    
    window.addEventListener('keyup', (e) => {
      keys[e.key] = false;
    });

    // Game loop
    function gameLoop() {
      if (!ctx) return;

      // Clear canvas
      ctx.fillStyle = '#87CEEB';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(0, 400, canvas.width, 50);

      // Player movement
      if (keys['ArrowLeft'] && player.x > 0) {
        player.x -= player.speed;
      }
      if (keys['ArrowRight'] && player.x < canvas.width - player.width) {
        player.x += player.speed;
      }

      // Gravity
      player.velocityY += 0.5;
      player.y += player.velocityY;

      // Ground collision
      if (player.y >= 350) {
        player.y = 350;
        player.velocityY = 0;
        player.jumping = false;
      }

      // Draw player (blonde woman)
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(player.x + 20, player.y + 10, 12, 0, Math.PI * 2);
      ctx.fill();
      
      // Hair
      ctx.fillStyle = '#FFD700';
      ctx.fillRect(player.x + 8, player.y + 5, 24, 15);
      
      // Body
      ctx.fillStyle = '#FF69B4';
      ctx.fillRect(player.x + 10, player.y + 20, 20, 25);
      
      // Boobs (grow with gold bricks)
      const boobSize = 6 + (goldBricks >= 5 ? 4 : 0);
      ctx.beginPath();
      ctx.arc(player.x + 15, player.y + 28, boobSize, 0, Math.PI * 2);
      ctx.arc(player.x + 25, player.y + 28, boobSize, 0, Math.PI * 2);
      ctx.fillStyle = '#FFB6C1';
      ctx.fill();
      
      // Legs
      ctx.fillStyle = '#FFD700';
      ctx.fillRect(player.x + 12, player.y + 45, 7, 10);
      ctx.fillRect(player.x + 21, player.y + 45, 7, 10);

      // Draw and move men
      men.forEach((man) => {
        if (man.caught) return;
        
        // Run away from player
        if (player.x > man.x) {
          man.x -= man.speed;
        } else {
          man.x += man.speed;
        }

        // Draw man
        ctx.fillStyle = '#8B4513';
        ctx.beginPath();
        ctx.arc(man.x + 17, man.y + 10, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#4169E1';
        ctx.fillRect(man.x + 7, man.y + 20, 20, 25);

        // Collision with player
        if (
          player.x < man.x + man.width &&
          player.x + player.width > man.x &&
          player.y < man.y + man.height &&
          player.y + player.height > man.y
        ) {
          man.caught = true;
          goldBricks++;
          setScore((s) => s + 100);
          
          // Boost after 5 gold bricks
          if (goldBricks >= 5 && !player.boosted) {
            player.speed = 8;
            player.boosted = true;
          }
        }
      });

      // Draw and move police
      police.forEach((cop) => {
        // Chase player
        if (player.x > cop.x) {
          cop.x += cop.speed;
        } else {
          cop.x -= cop.speed;
        }

        // Draw police
        ctx.fillStyle = '#000080';
        ctx.beginPath();
        ctx.arc(cop.x + 17, cop.y + 10, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#000080';
        ctx.fillRect(cop.x + 7, cop.y + 20, 20, 25);
        
        // Police hat
        ctx.fillStyle = '#000000';
        ctx.fillRect(cop.x + 10, cop.y + 3, 15, 8);

        // Collision with player
        if (
          player.x < cop.x + cop.width &&
          player.x + player.width > cop.x &&
          player.y < cop.y + cop.height &&
          player.y + player.height > cop.y
        ) {
          catches++;
          cop.x = -100; // Reset police position
          
          if (catches >= 3) {
            setGameOver(true);
            cancelAnimationFrame(animationId);
            return;
          }
        }
      });

      // Draw and collect coins
      coinsList.forEach((coin) => {
        if (coin.collected) return;

        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(coin.x + 10, coin.y + 10, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#FFA500';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Collision
        if (
          player.x < coin.x + coin.width &&
          player.x + player.width > coin.x &&
          player.y < coin.y + coin.height &&
          player.y + player.height > coin.y
        ) {
          coin.collected = true;
          coins++;
          setScore((s) => s + 10);
        }
      });

      // Draw castle
      ctx.fillStyle = '#FFD700';
      ctx.fillRect(castle.x, castle.y, castle.width, castle.height);
      ctx.fillStyle = '#FF6347';
      ctx.beginPath();
      ctx.moveTo(castle.x, castle.y);
      ctx.lineTo(castle.x + 50, castle.y - 40);
      ctx.lineTo(castle.x + 100, castle.y);
      ctx.fill();
      
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(castle.x + 35, castle.y + 70, 30, 50);

      // Check win condition
      if (
        player.x < castle.x + castle.width &&
        player.x + player.width > castle.x &&
        player.y < castle.y + castle.height &&
        player.y + player.height > castle.y &&
        goldBricks >= 5
      ) {
        setWon(true);
        setGameOver(true);
        cancelAnimationFrame(animationId);
        return;
      }

      // Draw HUD
      ctx.fillStyle = '#000000';
      ctx.font = '20px Arial';
      ctx.fillText(`Coins: ${coins}`, 10, 30);
      ctx.fillText(`Gold Bricks: ${goldBricks}/5`, 10, 60);
      ctx.fillText(`Caught: ${catches}/3`, 10, 90);
      
      if (goldBricks >= 5) {
        ctx.fillStyle = '#FF1493';
        ctx.fillText('💪 BOOSTED! Get to the castle!', 250, 30);
      }

      animationId = requestAnimationFrame(gameLoop);
    }

    gameLoop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('keydown', () => {});
      window.removeEventListener('keyup', () => {});
    };
  }, [gameStarted]);

  if (!gameStarted) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2rem'
      }}>
        <div style={{
          textAlign: 'center',
          color: 'white',
          maxWidth: '600px'
        }}>
          <h1 style={{ fontSize: '64px', marginBottom: '20px' }}>💎</h1>
          <h2 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: '700' }}>
            Gold Digger
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', opacity: 0.9 }}>
            Help the blonde bombshell catch men and collect gold bricks!
          </p>
          <div style={{ 
            textAlign: 'left', 
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '30px'
          }}>
            <p style={{ margin: '10px 0' }}>🎮 Use Arrow Keys to move</p>
            <p style={{ margin: '10px 0' }}>⬆️ Space/Up to jump</p>
            <p style={{ margin: '10px 0' }}>💰 Collect coins (+10 points)</p>
            <p style={{ margin: '10px 0' }}>👨 Catch 5 men to get gold bricks</p>
            <p style={{ margin: '10px 0' }}>💪 After 5 bricks, you get boosted!</p>
            <p style={{ margin: '10px 0' }}>👮 Avoid police (3 catches = jail!)</p>
            <p style={{ margin: '10px 0' }}>🏰 Reach the gold castle to win!</p>
          </div>
          <button
            onClick={() => setGameStarted(true)}
            style={{
              padding: '16px 48px',
              fontSize: '24px',
              fontWeight: '700',
              backgroundColor: '#FFD700',
              color: '#333',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Start Game! 🎮
          </button>
        </div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: won 
          ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
          : 'linear-gradient(135deg, #333 0%, #000 100%)',
        padding: '2rem'
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '64px', marginBottom: '20px' }}>
            {won ? '🏆' : '🚔'}
          </h1>
          <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>
            {won ? 'You Made It to the Castle!' : 'Busted! 3 Strikes!'}
          </h2>
          <p style={{ fontSize: '32px', marginBottom: '40px' }}>
            Final Score: {score}
          </p>
          <button
            onClick={() => {
              setGameStarted(false);
              setGameOver(false);
              setWon(false);
              setScore(0);
            }}
            style={{
              padding: '16px 48px',
              fontSize: '24px',
              fontWeight: '700',
              backgroundColor: '#FFD700',
              color: '#333',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              marginRight: '20px'
            }}
          >
            Play Again 🔄
          </button>
          <a
            href="/"
            style={{
              display: 'inline-block',
              padding: '16px 48px',
              fontSize: '24px',
              fontWeight: '700',
              backgroundColor: 'white',
              color: '#667eea',
              textDecoration: 'none',
              borderRadius: '12px'
            }}
          >
            Home 🏠
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1a1a1a',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
      }}>
        <canvas
          ref={canvasRef}
          width={1600}
          height={450}
          style={{
            border: '4px solid #FFD700',
            borderRadius: '8px',
            display: 'block'
          }}
        />
      </div>
      <p style={{ 
        color: 'white', 
        marginTop: '20px', 
        fontSize: '18px',
        textAlign: 'center'
      }}>
        Score: {score} | Use Arrow Keys to move, Space to jump!
      </p>
    </div>
  );
}