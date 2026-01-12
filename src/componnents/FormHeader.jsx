import { Film  } from "lucide-react";


const FormHeader = () => {
  return (
    <header className="bg-purple-700 text-white px-5 py-3 rounded-t-lg flex items-center gap-3 h-22">
      <Film className="h-6 w-6" />
      <h1 className="text-2xl font-bold">Movie Survey</h1>
    </header>
  );
};

export default FormHeader;
