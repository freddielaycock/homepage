import {
  Box,
  createListCollection,
  Field,
  Heading,
  NumberInput,
  Portal,
  Select,
  Text,
} from "@chakra-ui/react";
import { type FC, useEffect, useMemo, useRef, useState } from "react";

import { setupCanvas } from "../../../../components/canvas/utils/setup-canvas";
import { randomPixels } from "./utils/random-pixels";
import { spiralPixels } from "./utils/spiral-pixels";

const canvasFunctionOptions = [
  { name: randomPixels.name, fn: randomPixels },
  { name: spiralPixels.name, fn: spiralPixels },
];

const spiralStartingColours = [
  { colour: "red", rgb: [255, 0, 0] },
  { colour: "green", rgb: [0, 255, 0] },
  { colour: "blue", rgb: [0, 0, 255] },
  { colour: "yellow", rgb: [255, 255, 0] },
  { colour: "cyan", rgb: [0, 255, 255] },
  { colour: "magenta", rgb: [255, 0, 255] },
];

export const Pixels: FC = () => {
  const [canvasFunction, setCanvasFunction] = useState(() => randomPixels);
  const [pixelsPerLine, setPixelsPerLine] = useState(50);
  const [spiralStartingColour, setSpiralStartingColour] = useState(
    spiralStartingColours[0],
  );
  const canvasFunctionCollection = useMemo(
    () =>
      createListCollection({
        items: canvasFunctionOptions,
        itemToString: (option) => option.name,
        itemToValue: (option) => option.name,
      }),
    [],
  );
  const spiralStartingColoursCollection = createListCollection({
    items: spiralStartingColours,
    itemToString: (option) => option.colour,
    itemToValue: (option) => option.colour,
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvasRef.current;

    if (!element) return;

    const canvas = setupCanvas({
      canvas: element,
      canvasFunction: canvasFunction,
      canvasFunctionAdditionalArgs:
        canvasFunction === spiralPixels
          ? {
              startingRgb: spiralStartingColour.rgb as [number, number, number],
            }
          : undefined,
      aspectRatio: 2,
      margin: 100,
      pixelsPerLine,
    });

    return canvas.dispose;
  }, [canvasFunction, spiralStartingColour, pixelsPerLine]);

  return (
    <>
      <Heading mt={6} textAlign="center">
        Pixels!
      </Heading>
      <Text my={4} textAlign="center">
        A quick little app I built a while ago, to create random pixel art.
        Select a function below to generate different patterns.
      </Text>
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
        my={2}
        width="60%"
      >
        <Select.HiddenSelect />
        <Select.Label>Select a function to generate pixels</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {canvasFunctionOptions.map((option) => (
                <Select.Item key={option.name} item={option}>
                  <Select.ItemText>{option.name}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Field.Root width="60%" margin="auto">
        <Field.Label>Pixels Per Line</Field.Label>
        <NumberInput.Root
          value={String(pixelsPerLine)}
          onValueChange={(e) => setPixelsPerLine(e.valueAsNumber)}
        >
          <NumberInput.Label />
          <NumberInput.ValueText />
          <NumberInput.Scrubber />
          <NumberInput.Input />
        </NumberInput.Root>
      </Field.Root>
      {canvasFunction === spiralPixels && (
        <Select.Root
          key="spiralStartingColours"
          collection={spiralStartingColoursCollection}
          value={[spiralStartingColour.colour]}
          onValueChange={(e) => {
            setSpiralStartingColour(
              spiralStartingColours.find(
                (option) => option.colour === e.value[0],
              ) ?? spiralStartingColours[0],
            );
          }}
          margin="auto"
          width="60%"
          pt={2}
        >
          <Select.HiddenSelect />
          <Select.Label>
            Select a starting colour for the spiral pixels
          </Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select colour" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {spiralStartingColours.map((option) => (
                  <Select.Item key={option.colour} item={option}>
                    <Select.ItemText>{option.colour}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
      )}
      <Box my={8} alignItems="center" justifyContent="center" display="flex">
        <canvas ref={canvasRef} aria-label="Pixels Canvas" />
      </Box>
    </>
  );
};
