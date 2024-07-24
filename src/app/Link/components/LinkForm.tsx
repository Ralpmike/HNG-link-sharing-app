interface LinkFormProps {
  newLink: { platform: string; url: string };
  setNewLink: (link: { platform: string; url: string }) => void;
  handleAddLink: () => void;
}

const LinkForm = ({ newLink, setNewLink, handleAddLink }: LinkFormProps) => {
  return (
    <div className="flex-1 bg-white shadow-md rounded-md p-8">
      <h2 className="text-2xl font-semibold mb-4">Customize your links</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Platform"
          value={newLink.platform}
          onChange={(e) => setNewLink({ ...newLink, platform: e.target.value })}
          className="w-full px-4 py-2 border rounded mb-2"
        />
        <input
          type="url"
          placeholder="Link"
          value={newLink.url}
          onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
          className="w-full px-4 py-2 border rounded mb-2"
        />
        <button onClick={handleAddLink} className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">+ Add new link</button>
      </div>
    </div>
  );
};

export default LinkForm;
