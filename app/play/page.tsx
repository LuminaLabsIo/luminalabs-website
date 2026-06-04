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
    let cameraX = 0;

    // Player
    const player = {
      x: 100,
      y: 300,
      width: 40,
      height: 60,
      velocityY: 0,
      jumping: false,
      speed: 3,
      boosted: false,
      direction: 1 // 1 = right, -1 = left
    };

    // Men to catch (spread out more)
    const men: Array<{x: number, y: number, width: number, height: number, speed: number, caught: boolean}> = [];
    for (let i = 0; i < 5; i++) {
      men.push({
        x: 300 + i * 400,
        y: 340,
        width: 35,
        height: 50,
        speed: 1.2,
        caught: false
      });
    }

    // Police (slower and less aggressive)
    const police: Array<{x: number, y: number, width: number, height: number, speed: number, active: boolean}> = [];
    for (let i = 0; i < 2; i++) {
      police.push({
        x: 600 + i * 800,
        y: 340,
        width: 35,
        height: 50,
        speed: 0.8,
        active: true
      });
    }

    // Coins (more spread out)
    const coinsList: Array<{x: number, y: number, width: number, height: number, collected: boolean, floating: number}> = [];
    for (let i = 0; i < 15; i++) {
      coinsList.push({
        x: 200 + i * 150,
        y: 200 - Math.random() * 80,
        width: 25,
        height: 25,
        collected: false,
        floating: Math.random() * Math.PI * 2
      });
    }

    // Clouds for decoration
    const clouds = [
      { x: 100, y: 50 },
      { x: 400, y: 80 },
      { x: 700, y: 40 },
      { x: 1000, y: 70 },
      { x: 1300, y: 50 }
    ];

    // Castle (further away)
    const castle = {
      x: 2200,
      y: 240,
      width: 120,
      height: 160
    };

    // Hearts for decoration
    const hearts: Array<{x: number, y: number, life: number}> = [];

    // Keyboard state
    const keys: {[key: string]: boolean} = {};
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.key] = true;
      
      if ((e.key === ' ' || e.key === 'ArrowUp') && !player.jumping) {
        player.velocityY = -11;
        player.jumping = true;
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Game loop
    function gameLoop() {
      if (!ctx) return;

      // Camera follows player
      cameraX = player.x - 300;
      if (cameraX < 0) cameraX = 0;

      // Clear canvas with gradient sky
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#87CEEB');
      gradient.addColorStop(1, '#E0F6FF');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw clouds
      clouds.forEach((cloud) => {
        const cloudX = cloud.x - cameraX * 0.5;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.beginPath();
        ctx.arc(cloudX, cloud.y, 30, 0, Math.PI * 2);
        ctx.arc(cloudX + 25, cloud.y, 35, 0, Math.PI * 2);
        ctx.arc(cloudX + 50, cloud.y, 30, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw ground with grass
      const groundGradient = ctx.createLinearGradient(0, 400, 0, 450);
      groundGradient.addColorStop(0, '#90EE90');
      groundGradient.addColorStop(1, '#228B22');
      ctx.fillStyle = groundGradient;
      ctx.fillRect(0, 400, canvas.width, 50);

      // Draw grass blades
      ctx.strokeStyle = '#228B22';
      ctx.lineWidth = 2;
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 400);
        ctx.lineTo(i + 3, 390);
        ctx.stroke();
      }

      // Player movement (slower)
      if (keys['ArrowLeft'] && player.x > 0) {
        player.x -= player.speed;
        player.direction = -1;
      }
      if (keys['ArrowRight']) {
        player.x += player.speed;
        player.direction = 1;
      }

      // Gravity (softer)
      player.velocityY += 0.4;
      player.y += player.velocityY;

      // Ground collision
      if (player.y >= 340) {
        player.y = 340;
        player.velocityY = 0;
        player.jumping = false;
      }

      // Draw player (improved blonde woman)
      const playerScreenX = player.x - cameraX;
      
      // Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.beginPath();
      ctx.ellipse(playerScreenX + 20, player.y + 60, 20, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Head (blonde)
      ctx.fillStyle = '#FFE4B5';
      ctx.beginPath();
      ctx.arc(playerScreenX + 20, player.y + 12, 14, 0, Math.PI * 2);
      ctx.fill();
      
      // Hair (blonde with shine)
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(playerScreenX + 20, player.y + 10, 16, 0, Math.PI);
      ctx.fill();
      ctx.fillStyle = '#FFED4E';
      ctx.beginPath();
      ctx.arc(playerScreenX + 15, player.y + 8, 6, 0, Math.PI * 2);
      ctx.fill();
      
      // Eyes
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(playerScreenX + 16, player.y + 12, 2, 0, Math.PI * 2);
      ctx.arc(playerScreenX + 24, player.y + 12, 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Smile
      ctx.strokeStyle = '#FF1493';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(playerScreenX + 20, player.y + 14, 4, 0, Math.PI);
      ctx.stroke();
      
      // Body (pink dress)
      ctx.fillStyle = '#FF69B4';
      ctx.beginPath();
      ctx.moveTo(playerScreenX + 20, player.y + 26);
      ctx.lineTo(playerScreenX + 10, player.y + 50);
      ctx.lineTo(playerScreenX + 30, player.y + 50);
      ctx.closePath();
      ctx.fill();
      
      // Boobs (grow with gold bricks)
      const boobSize = 7 + (goldBricks >= 5 ? 5 : 0);
      ctx.fillStyle = '#FFB6C1';
      ctx.beginPath();
      ctx.arc(playerScreenX + 15, player.y + 30, boobSize, 0, Math.PI * 2);
      ctx.arc(playerScreenX + 25, player.y + 30, boobSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Arms
      ctx.strokeStyle = '#FFE4B5';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(playerScreenX + 12, player.y + 28);
      ctx.lineTo(playerScreenX + 5, player.y + 40);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(playerScreenX + 28, player.y + 28);
      ctx.lineTo(playerScreenX + 35, player.y + 40);
      ctx.stroke();
      
      // Legs
      ctx.fillStyle = '#FFE4B5';
      ctx.fillRect(playerScreenX + 13, player.y + 50, 6, 12);
      ctx.fillRect(playerScreenX + 21, player.y + 50, 6, 12);
      
      // Shoes
      ctx.fillStyle = '#FF1493';
      ctx.fillRect(playerScreenX + 11, player.y + 60, 9, 4);
      ctx.fillRect(playerScreenX + 20, player.y + 60, 9, 4);

      // Draw and move men (improved design)
      men.forEach((man) => {
        if (man.caught) return;
        
        const manScreenX = man.x - cameraX;
        
        // Run away from player (slower)
        if (Math.abs(player.x - man.x) < 200) {
          if (player.x > man.x) {
            man.x -= man.speed;
          } else {
            man.x += man.speed;
          }
        }

        // Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.ellipse(manScreenX + 17, man.y + 52, 18, 4, 0, 0, Math.PI * 2);
        ctx.fill();

        // Head
        ctx.fillStyle = '#FFE4B5';
        ctx.beginPath();
        ctx.arc(manScreenX + 17, man.y + 10, 12, 0, Math.PI * 2);
        ctx.fill();
        
        // Hair (brown)
        ctx.fillStyle = '#8B4513';
        ctx.beginPath();
        ctx.arc(manScreenX + 17, man.y + 8, 12, 0, Math.PI);
        ctx.fill();
        
        // Eyes (scared)
        ctx.fillStyle = '#FFF';
        ctx.beginPath();
        ctx.arc(manScreenX + 14, man.y + 10, 3, 0, Math.PI * 2);
        ctx.arc(manScreenX + 20, man.y + 10, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(manScreenX + 14, man.y + 10, 1.5, 0, Math.PI * 2);
        ctx.arc(manScreenX + 20, man.y + 10, 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Body (suit)
        ctx.fillStyle = '#4169E1';
        ctx.fillRect(manScreenX + 7, man.y + 22, 20, 25);
        
        // Tie
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.moveTo(manScreenX + 17, man.y + 22);
        ctx.lineTo(manScreenX + 14, man.y + 35);
        ctx.lineTo(manScreenX + 20, man.y + 35);
        ctx.closePath();
        ctx.fill();
        
        // Legs
        ctx.fillStyle = '#000080';
        ctx.fillRect(manScreenX + 10, man.y + 47, 6, 8);
        ctx.fillRect(manScreenX + 18, man.y + 47, 6, 8);

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
          
          // Create hearts
          for (let i = 0; i < 5; i++) {
            hearts.push({
              x: man.x,
              y: man.y,
              life: 30
            });
          }
          
          // Boost after 5 gold bricks
          if (goldBricks >= 5 && !player.boosted) {
            player.speed = 5;
            player.boosted = true;
          }
        }
      });

      // Draw and move police (improved design)
      police.forEach((cop) => {
        if (!cop.active) return;
        
        const copScreenX = cop.x - cameraX;
        
        // Chase player (slower and less aggressive)
        if (Math.abs(player.x - cop.x) < 300) {
          if (player.x > cop.x) {
            cop.x += cop.speed;
          } else {
            cop.x -= cop.speed;
          }
        }

        // Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.ellipse(copScreenX + 17, cop.y + 52, 18, 4, 0, 0, Math.PI * 2);
        ctx.fill();

        // Head
        ctx.fillStyle = '#FFE4B5';
        ctx.beginPath();
        ctx.arc(copScreenX + 17, cop.y + 12, 11, 0, Math.PI * 2);
        ctx.fill();
        
        // Police hat
        ctx.fillStyle = '#000080';
        ctx.fillRect(copScreenX + 8, cop.y + 2, 18, 8);
        ctx.fillRect(copScreenX + 6, cop.y + 6, 22, 4);
        
        // Badge on hat
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(copScreenX + 17, cop.y + 8, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Eyes (angry)
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(copScreenX + 14, cop.y + 14, 2, 0, Math.PI * 2);
        ctx.arc(copScreenX + 20, cop.y + 14, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Mustache
        ctx.fillStyle = '#000';
        ctx.fillRect(copScreenX + 12, cop.y + 18, 10, 2);
        
        // Body (uniform)
        ctx.fillStyle = '#000080';
        ctx.fillRect(copScreenX + 7, cop.y + 24, 20, 25);
        
        // Buttons
        ctx.fillStyle = '#FFD700';
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(copScreenX + 17, cop.y + 28 + i * 6, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Belt
        ctx.fillStyle = '#000';
        ctx.fillRect(copScreenX + 7, cop.y + 44, 20, 3);
        
        // Legs
        ctx.fillStyle = '#000080';
        ctx.fillRect(copScreenX + 10, cop.y + 47, 6, 8);
        ctx.fillRect(copScreenX + 18, cop.y + 47, 6, 8);

        // Collision with player
        if (
          player.x < cop.x + cop.width &&
          player.x + player.width > cop.x &&
          player.y < cop.y + cop.height &&
          player.y + player.height > cop.y &&
          cop.active
        ) {
          catches++;
          cop.active = false;
          
          // Move cop far away
          cop.x = player.x + 500;
          
          setTimeout(() => {
            cop.active = true;
          }, 3000);
          
          if (catches >= 3) {
            setGameOver(true);
            cancelAnimationFrame(animationId);
            return;
          }
        }
      });

      // Draw and animate coins
      coinsList.forEach((coin) => {
        if (coin.collected) return;

        const coinScreenX = coin.x - cameraX;
        coin.floating += 0.05;
        const floatY = coin.y + Math.sin(coin.floating) * 5;

        // Coin shine
        const coinGradient = ctx.createRadialGradient(
          coinScreenX + 12, floatY + 12, 2,
          coinScreenX + 12, floatY + 12, 12
        );
        coinGradient.addColorStop(0, '#FFED4E');
        coinGradient.addColorStop(1, '#FFD700');
        
        ctx.fillStyle = coinGradient;
        ctx.beginPath();
        ctx.arc(coinScreenX + 12, floatY + 12, 12, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#FFA500';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Dollar sign
        ctx.fillStyle = '#FFA500';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('$', coinScreenX + 8, floatY + 17);

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

      // Draw hearts
      hearts.forEach((heart, index) => {
        heart.life--;
        heart.y -= 2;
        
        const heartScreenX = heart.x - cameraX;
        
        ctx.fillStyle = `rgba(255, 20, 147, ${heart.life / 30})`;
        ctx.font = '24px Arial';
        ctx.fillText('💕', heartScreenX, heart.y);
        
        if (heart.life <= 0) {
          hearts.splice(index, 1);
        }
      });

      // Draw castle (improved)
      const castleScreenX = castle.x - cameraX;
      
      // Castle shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(castleScreenX + 10, castle.y + castle.height, castle.width, 10);
      
      // Castle walls
      const castleGradient = ctx.createLinearGradient(
        castleScreenX, castle.y,
        castleScreenX, castle.y + castle.height
      );
      castleGradient.addColorStop(0, '#FFD700');
      castleGradient.addColorStop(1, '#FFA500');
      ctx.fillStyle = castleGradient;
      ctx.fillRect(castleScreenX, castle.y, castle.width, castle.height);
      
      // Castle details
      ctx.strokeStyle = '#FF8C00';
      ctx.lineWidth = 2;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(castleScreenX + i * 25, castle.y);
        ctx.lineTo(castleScreenX + i * 25, castle.y + castle.height);
        ctx.stroke();
      }
      
      // Towers
      ctx.fillStyle = '#FFD700';
      ctx.fillRect(castleScreenX - 20, castle.y + 20, 20, 140);
      ctx.fillRect(castleScreenX + castle.width, castle.y + 20, 20, 140);
      
      // Roofs
      ctx.fillStyle = '#FF6347';
      ctx.beginPath();
      ctx.moveTo(castleScreenX - 25, castle.y + 20);
      ctx.lineTo(castleScreenX - 10, castle.y - 20);
      ctx.lineTo(castleScreenX + 5, castle.y + 20);
      ctx.closePath();
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(castleScreenX + castle.width - 5, castle.y + 20);
      ctx.lineTo(castleScreenX + castle.width + 10, castle.y - 20);
      ctx.lineTo(castleScreenX + castle.width + 25, castle.y + 20);
      ctx.closePath();
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(castleScreenX, castle.y);
      ctx.lineTo(castleScreenX + 60, castle.y - 60);
      ctx.lineTo(castleScreenX + 120, castle.y);
      ctx.closePath();
      ctx.fill();
      
      // Door
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(castleScreenX + 40, castle.y + 100, 40, 60);
      
      // Door handle
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(castleScreenX + 65, castle.y + 130, 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Windows
      ctx.fillStyle = '#87CEEB';
      ctx.fillRect(castleScreenX + 20, castle.y + 60, 15, 20);
      ctx.fillRect(castleScreenX + 85, castle.y + 60, 15, 20);

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

      // Draw HUD with better styling
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(10, 10, 300, 110);
      
      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 22px Arial';
      ctx.fillText(`💰 Coins: ${coins}`, 20, 40);
      ctx.fillText(`💎 Gold Bricks: ${goldBricks}/5`, 20, 70);
      
      ctx.fillStyle = catches >= 2 ? '#FF0000' : '#FFD700';
      ctx.fillText(`🚔 Caught: ${catches}/3`, 20, 100);
      
      if (goldBricks >= 5) {
        ctx.fillStyle = 'rgba(255, 20, 147, 0.8)';
        ctx.fillRect(250, 10, 350, 50);
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 24px Arial';
        ctx.fillText('💪 BOOSTED! Get to castle! 🏰', 260, 45);
      }

      animationId = requestAnimationFrame(gameLoop);
    }

    gameLoop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
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
          width={800}
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