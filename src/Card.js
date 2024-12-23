import React, { useState, useRef, useEffect } from 'react';
import LoveText from './LoveText';
import './Card.css';

function Card() {
  const [open, setOpen] = useState(false);
  const canvasRef = useRef(null);

  /* Carta fechada */
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    
    /**
     * Corpo da carta
     */
    context.fillStyle = "pink"
    context.fillRect(10, 10, 310, 210)


    /**
     * Contornos da carta
     */
    context.beginPath()
    context.moveTo(10, 10)
    context.lineTo(10, 210)
    context.strokeStyle = "rgb(168, 66, 168)";
    context.lineWidth = 2
    context.stroke()

    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(310, 10);
    context.strokeStyle = "rgb(168, 66, 168)";
    context.lineWidth = 2;
    context.stroke();

    context.beginPath();
    context.moveTo(10, 210);
    context.lineTo(310, 210);
    context.strokeStyle = "rgb(168, 66, 168)";
    context.lineWidth = 4;
    context.stroke();


    context.beginPath();
    context.moveTo(310, 10);
    context.lineTo(310, 210);
    context.strokeStyle = "rgb(168, 66, 168)";
    context.lineWidth = 4;
    context.stroke();


    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(310 / 2, 210 / 2);
    context.strokeStyle = "rgb(168, 66, 168)";
    context.lineWidth = 2;
    context.stroke();

    context.beginPath();
    context.moveTo(310, 10);
    context.lineTo(310 / 2, 210 / 2);
    context.strokeStyle = "rgb(168, 66, 168)";
    context.lineWidth = 2;
    context.stroke();

  }, [])
  
  const openCardAnim = () => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    let progress = 0

    const animate = () => {
      context.fillStyle = "pink";
      context.fillRect(10, 10, 310, 210);

      context.beginPath();
      context.moveTo(10, 10);
      context.lineTo(10, 210);
      context.strokeStyle = "rgb(168, 66, 168)";
      context.lineWidth = 2;
      context.stroke();

      context.beginPath();
      context.moveTo(10, 10);
      context.lineTo(310, 10);
      context.strokeStyle = "rgb(168, 66, 168)";
      context.lineWidth = 2;
      context.stroke();

      context.beginPath();
      context.moveTo(10, 210);
      context.lineTo(310, 210);
      context.strokeStyle = "rgb(168, 66, 168)";
      context.lineWidth = 2;
      context.stroke();

      context.beginPath();
      context.moveTo(310, 10);
      context.lineTo(310, 210);
      context.strokeStyle = "rgb(168, 66, 168)";
      context.lineWidth = 2;
      context.stroke();

      // Animação de abertura (dividindo o envelope ao meio)
      const midX = 310 / 2;
      const midY = 210 / 2;

      // Lado esquerdo
      context.beginPath();
      context.moveTo(10, 10);
      context.lineTo(midX, midY - progress); // Movendo o meio para cima
      context.fillStyle = "pink";
      context.fill();
      context.stroke();

      // Lado direito
      context.beginPath();
      context.moveTo(310, 10);
      context.lineTo(midX, midY - progress); // Movendo o meio para cima
      context.fillStyle = "pink";
      context.fill();
      context.stroke();

      // Incrementa o progresso
      if (progress < 100) {
        progress += 2; // Velocidade da animação
        requestAnimationFrame(animate);
      } else {
        setOpen(true); // Finaliza a animação
      }
    }
    animate()
  }
  

  const openCard = () => {
    if(!open) {
      openCardAnim()
    }
  }

  return (
    <div className="card-container">
      <div className="canvas-container">
        <canvas className="canvas" ref={canvasRef} width={310} height={210} />
      </div>
      <button
        className={`card-open-button ${open ? "open" : ""}`}
        onClick={openCard}
      >
        Abrir
      </button>
      <LoveText />
    </div>
  );
}

export default Card;