import FormHeader from "./FormHeader";
import { CheckCircle2, RotateCcw } from "lucide-react";

const SubmitedForm = ({ formData, onReset }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
      <FormHeader />
      <div className="p-5">
        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <div className="text-green-800 font-semibold">
              ส่งแบบสำรวจสำเร็จ!
            </div>
          </div>
          <div className="space-y-2.5 text-gray-700">
            <div>
              <span className="font-medium">ชื่อ:</span> {formData.name}
            </div>
            <div>
              <span className="font-medium">อีเมล:</span> {formData.email}
            </div>
            <div>
              <span className="font-medium">หนังที่เลือก:</span>{" "}
              <span className="text-purple-600 font-semibold">
                {formData.movie}
              </span>
            </div>
            {formData.comment && (
              <div>
                <span className="font-medium">ความคิดเห็น:</span>{" "}
                <div className="text-gray-700 pl-5 py-2">
                  {formData.comment}
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={onReset}
          className="mt-5 w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
        >
          <RotateCcw className="h-5 w-5" />
          ทำแบบสำรวจใหม่
        </button>
      </div>
    </div>
  );
};

export default SubmitedForm;
