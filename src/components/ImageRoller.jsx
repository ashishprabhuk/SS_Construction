/* eslint-disable react/prop-types */

const ImageRoller = ({ images, slideDuration, imageWidth, fadeColor = '#FCF5EB', imageHeight = '400px' }) => {
  return (
    <div style={{ 
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      margin: '20px 0',
    }}>
      {/* Edge fade effect */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '100px',
        background: `linear-gradient(to right, ${fadeColor}, transparent)`,
        zIndex: 2,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '100px',
        background: `linear-gradient(to left, ${fadeColor}, transparent)`,
        zIndex: 2,
        pointerEvents: 'none'
      }} />

      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      
      <div style={{
        display: 'flex',
        animation: `slide ${slideDuration}s linear infinite`,
        width: `${images.length * imageWidth * 2}px`,
        willChange: 'transform' // Improve animation performance
      }}>
        {[...images, ...images].map((img, index) => (
          <div key={index} style={{
            flexShrink: 0,
            width: `${imageWidth}px`,
            padding: '0 10px',
            boxSizing: 'border-box',
            height: imageHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={img} 
              alt={`Slide ${index}`} 
              style={{ 
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                borderRadius: '8px',
                objectFit: 'contain',
                transition: 'transform 0.3s ease' // Smooth hover effect
              }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

ImageRoller.defaultProps = {
  slideDuration: 20,
  imageWidth: 300
};

export default ImageRoller;