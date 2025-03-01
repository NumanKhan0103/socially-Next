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

      <SignedOut>
        <SignInButton mode='modal'>
          <Button>
            Sign In
          </Button>
          </SignInButton>
        <SignUpButton mode='modal' />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
