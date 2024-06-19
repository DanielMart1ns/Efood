import { TagContent } from './style';

type Props = {
  children: string;
};

const Tag = ({ children }: Props) => <TagContent>{children}</TagContent>;

export default Tag;
