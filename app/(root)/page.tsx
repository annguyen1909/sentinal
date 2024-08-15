import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TooltipProvider } from "@/components/ui/tooltip";

import { userDetail } from "@/types/types";
import MainChat from "@/components/shared/MainChat";

const Home = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const userProps: userDetail = {
    username: user.username ?? "",
    imageUrl: user.imageUrl,
  };

  // Create an async function to use the Gradio client
  // async function runPrediction() {
  //   try {
  //     const client = await Client.connect("dad1909/cyberapi", {
  //       hf_token: "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"
  //     });

  //     // Make a prediction by calling the predict method
  //     const result = await client.predict("/predict", {
  //       selected_model: "CyberSentinel",
  //       prompt: "do you know black holes!!",
  //       prompt_type: "Information",
  //       max_length: 128,
  //     });

  //     // Log the result
  //     console.log(result.data);
  //   } catch (error) {
  //     console.error("Error while making prediction:", error);
  //   }
  // }

  // Run the prediction function
  // runPrediction();

  return (
    <TooltipProvider>
      <div className="grid h-screen w-full">
          <MainChat user={userProps} />
      </div>
    </TooltipProvider>
  );
};

export default Home;
