import React from 'react';
import Modal from '@/components/UI/Modal/modal';
import PhotoCard from '@/components/UI/Cards/PhotoCard';
import photos, { Photo } from '@/utils/photos';

const PhotoModal = ({ params: { id } }: { params: { id: string } }) => {
  const photo: Photo = photos.find((p) => p.id === id)!;
  return (
    <Modal>
      <PhotoCard photo={photo} />
    </Modal>
  );
};

export default PhotoModal;
