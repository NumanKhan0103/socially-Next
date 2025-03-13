import  ThemeToggler  from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Home() {
  return (
    <>
    <div className='m-4'>

      <h1> Main Content Here</h1>
    </div>
    </>
  );
}
