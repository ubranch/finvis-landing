import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { Container } from "@/components/ui/container";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Integration Hub",
    description:
      "Integration, scalability, and data security.",
  },
  {
    icon: "LineChart",
    title: "Insight Generator",
    description:
      "Fully automated generation of financial reports.",
  },
  {
    icon: "Wallet",
    title: "Value Optimizer",
    description:
      "Maximize ROI with competitive pricing. Premium features at affordable costs for optimal financial visualization value.",
  },
  {
    icon: "Sparkle",
    title: "Data Visualizer",
    description:
      "User-friendly UI and comprehensive visualization of data.",
  },
];

export const BenefitsSection = () => {
  return (
    <Container>
      <section id="benefits" className="container py-12 sm:py-24">
        <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
          <div>
            <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Empower Decision-Making
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              FinVis transforms financial data interaction, offering powerful tools to streamline workflows and enhance understanding.
              In today&apos;s business landscape, FinVis is your key to unlocking data-driven success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 w-full">
            {benefitList.map(({ icon, title, description }, index) => (
              <Card
                key={title}
                className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
              >
                <CardHeader>
                  <div className="flex justify-between">
                    <Icon
                      name={icon as keyof typeof icons}
                      size={32}
                      color="hsl(var(--primary))"
                      className="mb-6 text-primary"
                    />
                    <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                      0{index + 1}
                    </span>
                  </div>

                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground">
                  {description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};
