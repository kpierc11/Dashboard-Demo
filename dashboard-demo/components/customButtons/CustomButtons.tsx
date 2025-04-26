import styled from "@emotion/styled";

export const LightBlueButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${"blue"};
  border: 2px solid ${"blue"};
`;

export default function BlueButton() {
  return <LightBlueButton></LightBlueButton>;
}
