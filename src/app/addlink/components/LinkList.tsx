// components/LinkList.tsx

interface LinkListProps {
  links: { platform: string; url: string }[];
  handleRemoveLink: (index: number) => void;
}

const LinkList = ({ links, handleRemoveLink }: LinkListProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Links</h3>
      {links.map((link, index) => (
        <div key={index} className="flex items-center mb-2">
          <div className="flex-1 bg-gray-100 p-2 rounded">{link.platform}</div>
          <button className="text-red-600 ml-2" onClick={() => handleRemoveLink(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default LinkList;
