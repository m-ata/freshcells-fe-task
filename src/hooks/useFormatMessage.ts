import { useIntl, MessageDescriptor } from 'react-intl';

interface FormatMessageArgs extends MessageDescriptor {}

interface FormatMessageValues {
  [key: string]: string | number | boolean | null | undefined | Date;
}

export const useFormatMessage = () => {
  const { formatMessage } = useIntl();

  return (
    args: FormatMessageArgs,
    values: FormatMessageValues = {},
  ): string => {
    const formattedMessage = formatMessage(args, values);
    return formattedMessage;
  };
};
