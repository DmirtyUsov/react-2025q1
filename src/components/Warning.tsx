type Props = {
  title?: string;
  message?: string;
};
const Warning = ({
  title = 'Be warned',
  message = 'Something wrong.',
}: Props) => {
  return (
    <div
      className="border-l-4 border-orange-500 bg-orange-100 p-4 text-orange-700"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{message}</p>
    </div>
  );
};

export default Warning;
