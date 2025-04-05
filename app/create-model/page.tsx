"use client";

import { useState, ChangeEvent } from "react";
import { Upload, User, ImagePlus } from "lucide-react";
import type { NextPage } from "next";
import Logo from "@/public/logo";

interface ModelForm {
  description: string;
  age: string;
  faceColor: string;
  eyeColor: string;
  images: FileList | null;
}

const CreateModelPage: NextPage = () => {
  const [form, setForm] = useState<ModelForm>({
    description: "",
    age: "",
    faceColor: "",
    eyeColor: "",
    images: null,
  });

  const [isDragging, setIsDragging] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm({ ...form, images: e.target.files });
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      setForm({ ...form, images: e.dataTransfer.files });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200">
      {/* Navbar */}
      <nav className="bg-white shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <Logo />
          <span className="text-2xl font-bold text-gray-900">photogenai</span>
        </div>
        <div className="p-2 bg-purple-100 rounded-full">
          <User className="w-6 h-6 text-purple-600" />
        </div>
      </nav>

      {/* Page Layout Split in Two Parts */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-8">
        {/* Left Form Section */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg backdrop-filter">
            <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Logo />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    Create New Model
                  </h1>
                  <p className="text-purple-100 mt-1">
                    Fill in the details to create your model profile
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Upload Images
                </label>
                <div
                  className={`relative mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${
                    isDragging
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-300"
                  } border-dashed rounded-xl transition-colors duration-200`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="space-y-3 text-center">
                    <div className="flex flex-col items-center">
                      <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 mt-4">
                        <label className="relative cursor-pointer rounded-md font-medium text-purple-600 hover:text-purple-500">
                          <span>Upload files</span>
                          <input
                            type="file"
                            multiple
                            className="sr-only"
                            onChange={handleImageChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        PNG, JPG up to 10MB each
                      </p>
                    </div>
                    {form.images && (
                      <div className="mt-4 text-sm text-gray-600">
                        {form.images.length} file(s) selected
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Model Description
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={4}
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  placeholder="Describe your model, how you model will look.."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">
                    Age Range
                  </label>
                  <select
                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                  >
                    <option value="">Age</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46+">46+</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">
                    Face Color
                  </label>
                  <select
                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={form.faceColor}
                    onChange={(e) =>
                      setForm({ ...form, faceColor: e.target.value })
                    }
                  >
                    <option value="">Face Color</option>
                    <option value="fair">Fair</option>
                    <option value="medium">Medium</option>
                    <option value="olive">Olive</option>
                    <option value="brown">Brown</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">
                    Eye Color
                  </label>
                  <select
                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={form.eyeColor}
                    onChange={(e) =>
                      setForm({ ...form, eyeColor: e.target.value })
                    }
                  >
                    <option value="">Eye Color</option>
                    <option value="brown">Brown</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="hazel">Hazel</option>
                    <option value="gray">Gray</option>
                  </select>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-md text-base font-medium text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition-all duration-200 hover:scale-[1.02]"
                >
                  Create Model
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Empty Section */}
        <div className="lg:w-1/2 w-full border-2 border-dashed border-gray-300 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-sm">
          Created models will appear here
        </div>
      </div>
    </div>
  );
};

export default CreateModelPage;
