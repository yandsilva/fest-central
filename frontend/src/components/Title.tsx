interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <h2 className="font-montserrat text-2xl font-bold">{title}</h2>;
}
