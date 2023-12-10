import './image-preview.css'

export interface IPreviewImage {
  img: string;
  alt: string;
}

export const PreviewImage: React.FC<IPreviewImage> = ({ img, alt }) => {
  return (
    <div
      className="image-container"
    >
        <img
          className="preview-image"
          src={img}
          alt={alt}
        />
    </div>
  );
};