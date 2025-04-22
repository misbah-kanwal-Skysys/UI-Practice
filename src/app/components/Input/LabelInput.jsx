import React from "react";
import { Box, Stack, Field, Input } from "@chakra-ui/react";
import { CgAsterisk } from "react-icons/cg";

const LabelInput = ({
  name,
  labelVariant,
  type,
  variant,
  placeholder,
  label,
  required,
}) => {
  return (
    <Box w={"100%"}>
      <Field.Root required>
        <Field.Label>
          Email <Field.RequiredIndicator />
        </Field.Label>
        <Input
          name={name}
          variant={variant}
          placeholder={placeholder}
          type={type}
        />
      </Field.Root>
      <Box>
        <Box marginBottom={"11px"} variant={labelVariant}>
          {label}
          {required ? (
            <Box color={"red"} as="span" fontSize={"12px"}>
              <CgAsterisk />
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default LabelInput;
