export interface Props {
  onSubmit?: (value: Event) => void;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
}
