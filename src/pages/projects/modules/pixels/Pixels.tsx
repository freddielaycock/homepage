import {
  Box,
  createListCollection,
  Heading,
  Portal,
  Select,
} from "@chakra-ui/react";
import { type FC, useEffect, useMemo, useRef, useState } from "react";

import { setupCanvas } from "../../../../components/canvas/utils/setup-canvas";
import { randomPixels } from "./utils/random-pixels";

const canvasFunctionOptions = [{ name: randomPixels.name, fn: randomPixels }];

export const Pixels: FC = () => {
  const [canvasFunction, setCanvasFunction] = useState(() => randomPixels);
  const canvasFunctionCollection = useMemo(
    () =>
      createListCollection({
        items: canvasFunctionOptions,
        itemToString: (option) => option.name,
        itemToValue: (option) => option.name,
      }),
    [],
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvasRef.current;

    if (!element) return;

    const canvas = setupCanvas({
      canvas: element,
      canvasFunction: canvasFunction,
      aspectRatio: 2,
      margin: 100,
    });

    return canvas.dispose;
  }, [canvasFunction]);

  return (
    <>
      <Heading my={6} textAlign="center">
        Pixels! Using the "{canvasFunction.name}" function
      </Heading>
      <Select.Root
        key="canvasFunction"
        collection={canvasFunctionCollection}
        value={[canvasFunction.name]}
        onValueChange={(e) =>
          setCanvasFunction(
            () =>
              canvasFunctionOptions.find((option) => option.name === e.value[0])
                ?.fn ?? randomPixels,
          )
        }
        margin="auto"
        width="60%"
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Content>
            {canvasFunctionOptions.map((option) => (
              <Select.Item key={option.name} item={option}>
                <Select.ItemText>{option.name}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Content>
        </Portal>
      </Select.Root>
      <Box mt={8} alignItems="center" justifyContent="center" display="flex">
        <canvas ref={canvasRef} aria-label="Pixels Canvas" />
      </Box>
    </>
  );
};
