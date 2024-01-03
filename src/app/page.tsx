import SaContainer from '@/components/server-actions/sa-container';
import MacOsDock from '@/components/macOs-dock/macos-dock';
import ButtonAnimation from '@/components/Animations/Buttons/Button';
import ScrollAnimation from '@/components/Animations/Scroll Animations/scroll-animation';
import OtpAuth from '@/components/otp-authentication/otp-auth';
import TextBounceAnimation from '@/components/Animations/Text Bounce/text-bounce-animation';
import BackgroundColorAnimation from '@/components/Animations/Background/background-color-animation';
import CustomCursor from '@/components/Animations/Cursor/custom-cursor';
import AnimationContainer from '@/components/Animations/Resizable-Panel/AnimationContainer';
import RhfContainer from '@/components/React Hook Form - Zod - ServerAction/rhf-container';
import NewTodoPage from '@/components/server-actions/NewTodo with ServerActions/new-todo-page';
import SquishyCard from '@/components/cards/SquishyCard/SquishyCard';
import TiltCard from '@/components/cards/TiltCard/TiltCard';
import HoverImageLinks from '@/components/Animations/Links/hover-image-links';
import AnimatedTextPage from '@/components/Animations/Text/animated-text-page';
import RadialGradientOnMouseMoveAnimation from '@/components/Animations/Background/radial-gradient-onMouseMove-animation';
import TextGradient from "@/components/Animations/Text/text-gradient-page";
import Tabs from "@/components/Animations/Animated-Tabs/vercel-animated-tabs/tabs";
import App from "@/components/Animations/Scroll Animations/CSS Mask On Scroll Animation/app";
import PasswordStrength from "@/components/password-strength/password-strength";
import AppContainer from "@/components/Search/app-container";
import KindeApp from "@/components/Authentication/kinde/kinde-app";
// import App from "@/components/Animations/Cards/Google Does Card/app";
import ClientComponentAuth from "@/components/Authentication/kinde/Client-Component-Auth";
import NavbarOneWrapper from "@/components/Animations/Navigations/Navbar_one/navbar-one-wrapper";
import SwipeCarousel from "@/components/swipe-carousel/swipe-carousel";
import NavbarTwoAnimation from "@/components/Animations/Navigations/Navbar_two/navbar_two";
import AntDesignPagination from "@/components/AntDesign Pagination/AntDesignPagination";
import NextJsBlurImage from "@/components/NextJsBlurImage/NextJsBlurImage";

export default function Home() {
  return (
    <>
      {/*<section
        className={
          'relative flex h-screen animate-text-gradient items-center justify-center bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-7xl text-transparent'
        }
      >
        <RadialGradientOnMouseMoveAnimation />
        <TextGradient text={"Section 1"} />
      </section>
      <section className={'h-screen'}>section 2</section>
      <section className={'h-screen'}>section 3</section>
      <section className={'h-screen'}>section 4</section>
      <section className={'h-screen'}>section 5</section>
      <section className={'grid h-screen place-content-center'}>
        <span className='loading loading-infinity loading-lg'></span>
      </section>*/}
      {/*<SwipeCarousel />*/}
      {/*<NavbarTwoAnimation />*/}
      {/*<NavbarOneWrapper />*/}
      {/*<AntDesignPagination />*/}
      <NextJsBlurImage />
    </>
  );
}
