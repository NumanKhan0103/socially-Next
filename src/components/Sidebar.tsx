import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Sidebar() {

    const authUser = await currentUser();
    if (!authUser) return <UnAuthenticatedSidebar />;

    return (
       <div> side bar</div>

    )
}



const UnAuthenticatedSidebar = () => (
    <div className="sticky top-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">Welcome Back!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground mb-4">
            Login to access your profile and connect with others.
          </p>
          <SignInButton mode="modal">
            <Button className="w-full" variant="outline">
              Login
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button className="w-full mt-2" variant="default">
              Sign Up
            </Button>
          </SignUpButton>
        </CardContent>
      </Card>
    </div>
  );