interface PhonePreviewProps {
  links: { platform: string; url: string }[];
}


export default function PhonePreview({ links }: PhonePreviewProps) {
  return (
    <div className="flex-1 p-4">
      <div className="bg-white shadow-md rounded-md p-4 h-full">
        {links.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-500">No links added</div>
        ) : (
          <ul>
            {links.map((link, index) => (
              <li key={index} className="bg-gray-200 p-2 mb-2 rounded">
                {link.platform}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};


