import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ComponentProps, ReactNode } from "react";
import { Box } from "../Box";
import { Text } from "../Text";
import { TabsContainer, TabsContent, TabsList, TabsTrigger } from "./styles";

type Tab = {
  name: string;
  content: ReactNode;
};

export interface TabsProps extends ComponentProps<typeof TabsContainer> {
  tabs: Tab[];
}

export function Tabs({ tabs, ...props }: TabsProps) {
  return (
    <TabsContainer {...props}>
      <TabsList css={{ "--size-tabs": tabs.length }}>
        {tabs.map((tab) => (
          <TabsTrigger value={tab.name}>{tab.name}</TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent value={tab.name}>{tab.content}</TabsContent>
      ))}

      <TabsContent value="list">
        <Text>List</Text>
      </TabsContent>
    </TabsContainer>
  );
}
