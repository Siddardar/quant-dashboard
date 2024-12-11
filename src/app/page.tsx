import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Chart } from "@/components/chart";
import { Textbox } from "@/components/textbox";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Models</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Insert Model Name</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="grid grid-cols-4 gap-4 p-4 pt-0">
          <div className="grid gap-4 overflow-auto max-sm:col-span-4">
            <Textbox
              title={"Useful Textbox 1"}
              description={"description"}
              content1={"content1"}
              content2={"content2"}
            />
          </div>
          <div className="grid col-span-2 gap-4 overflow-auto max-sm:col-span-4">
            <Chart
              chartName={"Insert Name of Graph"}
              dates={"Insert Time Period"}
              content1={"content1"}
              content2={"content2"}
            />
          </div>
          <div className="grid gap-4 overflow-auto max-sm:col-span-4">
            <Textbox
              title={"Useful Textbox 2"}
              description={"description"}
              content1={"content1"}
              content2={"content2"}
            />
          </div>
        </div>
        <div className="grid gap-4 p-10 pb-5">
          <Textbox
            title={"Explanation of the Graph"}
            description={"This is how we can get rich quick"}
            content1={"content1"}
            content2={"content2"}
          />
        </div>
        <div className="grid gap-4 p-10 pt-5">
          <Textbox
            title={"Code Used"}
            description={"This is how we implemented it!"}
            content1={"content1"}
            content2={"content2"}
          />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
