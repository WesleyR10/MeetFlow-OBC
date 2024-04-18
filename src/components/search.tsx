import { Search as SearchIcon } from 'lucide-react';

type SearchProps = {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange: (checked: boolean) => void;
};

export const Search = ({ placeholder, onChange }: SearchProps) => {
  return (
    <div>
      <div className="flex items-center rounded-md border border-primary">
        <input
          type="text"
          name=""
          id=""
          className="w-96 bg-transparent px-3 outline-none max-sm:w-80"
          placeholder={placeholder}
          onChange={onChange}
        />
        <button className="rounded-md border-none bg-primary px-2.5 py-2.5 outline-none ">
          <SearchIcon className="text-white" />
        </button>
      </div>
    </div>
  );
};