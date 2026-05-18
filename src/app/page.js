
import Bannerpage from "./Components/Banner";
import Faqpage from "./Components/faq";
import Featuredpage from "./Components/Featured";
import Feedbackpage from "./Components/Feedback";

export default function Home() {
  return (
    <div >
     <Bannerpage></Bannerpage>
     <Featuredpage></Featuredpage>
     <Feedbackpage></Feedbackpage>
     <Faqpage></Faqpage>
     
    </div>
  );
}
