import Navbar from "../components/Navbar";
import PhotoGallery from "../components/PhotoGallery";
import MenuOrder from "../components/MenuOrder";
import Hours from "../components/Hours";
import LocationMap from "../components/LocationMap";
import OurStory from "../components/OurStory";
import BehindTheScenes from "../components/BehindTheScenes";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <PhotoGallery />
      <MenuOrder />
      <Hours />
      <LocationMap />
      <OurStory />
      <BehindTheScenes />
      <ContactForm />
      <Footer />
    </>
  );
}
