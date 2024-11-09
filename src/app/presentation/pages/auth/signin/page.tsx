import { Suspense } from "react";
import { CustomLoading } from "../../../components";
import SigninComponent from "./SigninPage";

export default function SigninPage() {

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-700">
      <div className="bg-white w-1/4 p-8 rounded-lg shadow-md">
        <Suspense fallback={<CustomLoading />}>
          <SigninComponent />
        </Suspense>
      </div>
    </div>
  );
}
