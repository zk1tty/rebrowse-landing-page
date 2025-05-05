import React from 'react';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QRModal: React.FC<QRModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 max-w-xs w-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-xl leading-none">&times;</button>
        </div>
        <div className="p-4">
          <img src="/qr-code.png" alt="QR Code" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default QRModal; 