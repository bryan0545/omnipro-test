import "./wellcomeMessage.scss";
export interface WellcomeMessageInterface {}

const WellcomeMessage: React.FC<WellcomeMessageInterface> = () => {
  return (
    <div className="message__container">
      <div className="principal__message-container">
        <span className="first__word">Bienvenido</span>
        <span className="message"> a Omnishop</span>
      </div>
      <div className="message-secondary">
        <span className=""> Ingresa o regístrate en Omniapp</span>
      </div>
    </div>
  );
};

export default WellcomeMessage;
