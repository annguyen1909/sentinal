import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Bird,
  CornerDownLeft,
  Paperclip,
  Rabbit,
  Settings,
  Share,
  Turtle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Home = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  return (
    <TooltipProvider>
      <div className="grid h-screen w-full">
        <div className="flex flex-col">
          <h1 className="head-text text-left">Workspace</h1>
          <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
            <h1 className="text-xl font-semibold text-light-1">
              Detect Vulnerable work space
            </h1>
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  style={{ color: "white" }}
                >
                  <Settings className="w-5 h-5" />
                  <span className="sr-only">Settings</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh]">
                <DrawerHeader>
                  <DrawerTitle>Configuration</DrawerTitle>
                  <DrawerDescription>
                    Configure the settings for the model and messages.
                  </DrawerDescription>
                </DrawerHeader>
                <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                  <fieldset className="grid gap-6 rounded-lg border p-4">
                    <legend className="-ml-1 px-1 text-sm font-medium">
                      Messages
                    </legend>
                    <legend className="-ml-1 px-1 text-sm font-medium text-light-1">
                      Settings
                    </legend>
                    <div className="grid gap-3">
                      <Label htmlFor="model">Model</Label>
                      <Select>
                        <SelectTrigger
                          id="model"
                          className="items-start [&_[data-description]]:hidden"
                        >
                          <SelectValue placeholder="Select a model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="genesis">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Rabbit className="w-6 h-6" />
                              <div className="grid gap-0.5">
                                <p>
                                  Neural{" "}
                                  <span className="font-medium text-foreground">
                                    Genesis
                                  </span>
                                </p>
                                <p className="text-xs" data-description>
                                  Our fastest model for general use cases.
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="explorer">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Bird className="w-6 h-6" />
                              <div className="grid gap-0.5">
                                <p>
                                  Neural{" "}
                                  <span className="font-medium text-foreground">
                                    Explorer
                                  </span>
                                </p>
                                <p className="text-xs" data-description>
                                  Performance and speed for efficiency.
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="quantum">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Turtle className="w-6 h-6" />
                              <div className="grid gap-0.5">
                                <p>
                                  Neural{" "}
                                  <span className="font-medium text-foreground">
                                    Quantum
                                  </span>
                                </p>
                                <p className="text-xs" data-description>
                                  The most powerful model for complex
                                  computations.
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Card className="max-w-full lg:max-w-3xl">
                      <CardHeader className="px-5">
                        <CardTitle>History</CardTitle>
                        <CardDescription>Save Vulnerable chat</CardDescription>
                      </CardHeader>
                      <CardContent className="overflow-y-auto max-h-60">
                        <Table>
                          <TableBody>
                            <TableRow className="bg-accent">
                              <TableCell>
                                <div className="font-medium">cROS Bug</div>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <div className="font-medium">cROS Bug</div>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </fieldset>
                </form>
              </DrawerContent>
            </Drawer>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto gap-1.5 text-sm"
            >
              <Share className="w-5 h-5" />
              Save
            </Button>
          </header>
          <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative hidden flex-col items-start gap-8 md:flex">
              <form className="grid w-full items-start gap-6">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium text-light-1">
                    Settings
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="model" style={{ color: "white" }}>
                      Model
                    </Label>

                    <Select>
                      <SelectTrigger
                        id="model"
                        className="items-start [&_[data-description]]:hidden"
                      >
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="genesis">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Rabbit className="w-6 h-6" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Genesis
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                Our fastest model for general use cases.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="explorer">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Bird className="w-6 h-6" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Explorer
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                Performance and speed for efficiency.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="quantum">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Turtle className="w-6 h-6" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Quantum
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                The most powerful model for complex
                                computations.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Card
                    x-chunk="dashboard-05-chunk-3"
                    className="max-w-full lg:max-w-3xl"
                  >
                    <CardHeader className="px-5">
                      <CardTitle>History</CardTitle>
                      <CardDescription>Save Vulnerable chat</CardDescription>
                    </CardHeader>
                    <CardContent className="overflow-y-auto max-h-60">
                      <Table>
                        <TableBody>
                          <TableRow className="bg-accent">
                            <TableCell>
                              <div className="font-medium">cROS Bug</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                date: 19/9/2024
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">cROS Bug</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                date: 19/9/2024
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">cROS Bug</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                date: 19/9/2024
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">cROS Bug</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                date: 19/9/2024
                              </div>
                            </TableCell>
                          </TableRow>
                          {/* Repeat other TableRows as needed */}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </fieldset>
              </form>
            </div>
            <div
              className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2"
              style={{
                color: "white",
                backgroundColor: "#333",
                borderColor: "white",
              }}
            >
              <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[400px]">
                <div className="flex items-start">
                  <img
                    src="/assets/members.svg"
                    alt="AI"
                    className="w-6 h-6 rounded-full mr-3"
                  />
                  <div className="max-w-md p-3 rounded-lg bg-gray-700 text-white">
                    <p>AI: This is how it works...</p>
                  </div>
                </div>
                <div className="flex justify-end items-start">
                  <div className="max-w-md p-3 rounded-lg bg-blue-500 text-white">
                    <p>User: How does this work?</p>
                  </div>
                  <img
                    src={clerkUser.imageUrl}
                    alt={clerkUser.username || "User"}
                    className="w-6 h-6 rounded-full ml-3"
                  />
                </div>
                <div className="flex items-start">
                  <img
                    src="/assets/members.svg"
                    alt="AI"
                    className="w-6 h-6 rounded-full mr-3"
                  />
                  <div className="max-w-md p-3 rounded-lg bg-gray-700 text-white">
                    <p>AI: I can help with various tasks...</p>
                  </div>
                </div>
                <div className="flex justify-end items-start">
                  <div className="max-w-md p-3 rounded-lg bg-blue-500 text-white">
                    <p>User: What can you do?</p>
                  </div>
                  <img
                    src={clerkUser.imageUrl}
                    alt={clerkUser.username || "User"}
                    className="w-6 h-6 rounded-full ml-3"
                  />
                </div>
              </div>
              <form
                className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
                x-chunk="dashboard-03-chunk-1"
              >
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center p-3 pt-0">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        style={{ color: "white" }}
                      >
                        <Paperclip className="w-5 h-5" />
                        <span className="sr-only">Attach file</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Attach File</TooltipContent>
                  </Tooltip>
                  <Button type="submit" size="sm" className="ml-auto gap-1.5">
                    Send Message
                    <CornerDownLeft className="w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Home;
