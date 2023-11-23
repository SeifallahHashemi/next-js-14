import SaContainer from "@/components/server-actions/sa-container";
import MacOsDock from "@/components/macOs-dock/macos-dock";
import ButtonAnimation from "@/components/Animations/Buttons/Button";
import ScrollAnimation from "@/components/Animations/Scroll Animations/scroll-animation";
import OtpAuth from "@/components/otp-authentication/otp-auth";
import TextBounceAnimation from "@/components/Animations/Text Bounce/text-bounce-animation";
import BackgroundColorAnimation from "@/components/Animations/Background/background-color-animation";
import CustomCursor from "@/components/Animations/Cursor/custom-cursor";
import AnimationContainer from "@/components/Animations/Resizable-Panel/AnimationContainer";
import RhfContainer from "@/components/React Hook Form - Zod - ServerAction/rhf-container";
import NewTodoPage from "@/components/server-actions/NewTodo with ServerActions/new-todo-page";

export default function Home() {
  return <NewTodoPage />;
}
