import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "../../styles";

export const TabsContainer = styled(TabsPrimitive.Root, {});

export const TabsList = styled(TabsPrimitive.List, {
  display: "grid",
  gridTemplateColumns: "repeat(var(--size-tabs), 1fr)",
  gap: "$2",
  padding: "$2",
  borderRadius: 6,
  backgroundColor: "$gray900",
});

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  height: 45,
  backgroundColor: "$gray800",
  padding: "0 1.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,

  cursor: "pointer",

  color: "$white",
  fontFamily: "$default",
  userSelect: "none",
  borderRadius: 6,

  "&:hover": { color: "#00B37E" },

  "&[data-state='active']": {
    position: "relative",
    boxShadow: "0 0 0 2px #00B37E",
  },

  "&:focus": {
    position: "relative",
    boxShadow: "0 0 0 2px #00B37E",
  },
});

export const TabsContent = styled(TabsPrimitive.Content, {});
