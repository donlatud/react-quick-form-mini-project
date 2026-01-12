import MovieList from "./MovieList";
import movies from "../assets/data/movies";
import Button from "../common/Button";
import FormHeader from "./FormHeader";
import SubmitedForm from "./SubmitedForm";
import { useState } from "react";
import { RotateCcw, Send } from "lucide-react";

const MovieSurveyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    movie: "",
    comment: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    movie: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name || e.target.id]: e.target.value,
    });
  };

  const validateForm = (e) => {
    e.preventDefault();
    const newErrors = {
      name: "",
      email: "",
      movie: "",
    };
    const RegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name === "") {
      newErrors.name = "โปรดใส่ชื่อของคุณ";
    }

    if (formData.email === "" && RegexEmail.test(formData.email)) {
      newErrors.email = "โปรดใส่อีเมลของคุณ";
    }

    if (formData.movie === "") {
      newErrors.movie = "กรุณาเลือกหนังที่คุณชอบ";
    }

    setErrors(newErrors);

    if (
      (newErrors.name === "") & (newErrors.email === "") &&
      newErrors.movie === ""
    ) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      movie: "",
      comment: "",
    });
    setErrors({
      name: "",
      email: "",
      movie: "",
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {!isSubmitted ? (
        <form
          onSubmit={validateForm}
          className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden"
        >
          <FormHeader />

          <div className="p-5 space-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-700 font-medium">
                ชื่อ<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="กรุณากรอกชื่อของคุณ"
                className={`px-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-700 font-medium">
                อีเมล<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={`px-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="favoriteMovie"
                className="text-gray-700 font-medium"
              >
                เลือกหนังที่คุณชอบ<span className="text-red-500">*</span>
              </label>
              <div
                className={`p-3 border rounded-lg space-y-2 ${
                  errors.movie ? "border-red-500" : "border-gray-300"
                }`}
              >
                {movies.map((movie) => {
                  return (
                    <MovieList
                      key={movie.title}
                      title={movie.title}
                      year={movie.year}
                      director={movie.director}
                      value={formData.movie}
                      onChange={handleChange}
                    />
                  );
                })}
              </div>
              {errors.movie && (
                <span className="text-red-500 text-sm">{errors.movie}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="comment" className="text-gray-700 font-medium">
                ความคิดเห็นเกี่ยวกับหนัง
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                rows="4"
                className="px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-y"
              />
            </div>

            <div className="flex gap-20 pt-3 ">
              <Button
                type="button"
                onClick={handleReset}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700 flex-1"
                icon={<RotateCcw className="h-5 w-5" />}
              >
                รีเซ็ต
              </Button>
              <Button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all font-medium shadow-md flex-1"
                icon={<Send className="h-5 w-5" />}
              >
                ส่งแบบสำรวจ
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <SubmitedForm formData={formData} onReset={handleReset} />
      )}
    </div>
  );
};

export default MovieSurveyForm;
