import { Image, ImageSourcePropType, StyleSheet } from "react-native";

interface Props {
  placeHolderImage: ImageSourcePropType;
  selectedImage?: string;
}

const ImageViewer = ({ placeHolderImage, selectedImage }: Props) => {
  const sourceImage = selectedImage ? { uri: selectedImage } : placeHolderImage;
  return <Image source={sourceImage} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
