
import React, { useState } from "react";
import { Camera, Star, MessageSquare, User } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    palmImage: null as File | null,
    rashi: "",
    language: "",
  });

  const [previewUrl, setPreviewUrl] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, palmImage: file });
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.dateOfBirth || !formData.palmImage) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-mystic-100 to-mystic-200 py-2 px-4">
      <div className="text-center mb-3 animate-fade-in">
        <h1 className="text-2xl font-bold text-mystic-600">
          Taranath Tantrik
        </h1>
        <div className="inline-block px-3 py-0.5 bg-mystic-400/10 rounded-full">
          <h2 className="text-base text-mystic-500">Mystical Palm Reading</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="palm-form">
        <div className="space-y-3">
          <div>
            <h3 className="section-title">
              <User className="w-4 h-4" />
              Basic Information
            </h3>
            
            {/* Name and DOB row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="form-group">
                <label className="input-label">
                  Full Name
                  <span className="required-asterisk">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="input-label">
                  Date of Birth
                  <span className="required-asterisk">*</span>
                </label>
                <input
                  type="date"
                  className="form-input"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    setFormData({ ...formData, dateOfBirth: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Palm Image row */}
            <div className="mt-3">
              <div className="form-group">
                <label className="input-label">
                  Palm Image
                  <span className="required-asterisk">*</span>
                </label>
                <div className="upload-area">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Palm preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="upload-content">
                      <Camera className="w-5 h-5" />
                      <span>Upload Image</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="section-title">
              <Star className="w-4 h-4" />
              Additional Details
            </h3>
            
            {/* Rashi and Language row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="form-group">
                <label className="input-label">
                  Rashi (Optional)
                </label>
                <div className="select-wrapper">
                  <select
                    className="select-input"
                    value={formData.rashi}
                    onChange={(e) =>
                      setFormData({ ...formData, rashi: e.target.value })
                    }
                  >
                    <option value="">Select Rashi</option>
                    <option value="aries">Aries (Mesh)</option>
                    <option value="taurus">Taurus (Vrishabh)</option>
                    <option value="gemini">Gemini (Mithun)</option>
                    <option value="cancer">Cancer (Kark)</option>
                    <option value="leo">Leo (Singh)</option>
                    <option value="virgo">Virgo (Kanya)</option>
                    <option value="libra">Libra (Tula)</option>
                    <option value="scorpio">Scorpio (Vrishchik)</option>
                    <option value="sagittarius">Sagittarius (Dhanu)</option>
                    <option value="capricorn">Capricorn (Makar)</option>
                    <option value="aquarius">Aquarius (Kumbh)</option>
                    <option value="pisces">Pisces (Meen)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="input-label">
                  Language
                </label>
                <div className="select-wrapper">
                  <select
                    className="select-input"
                    value={formData.language}
                    onChange={(e) =>
                      setFormData({ ...formData, language: e.target.value })
                    }
                  >
                    <option value="">Select Language</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="bengali">Bengali</option>
                    <option value="marathi">Marathi</option>
                    <option value="tamil">Tamil</option>
                    <option value="telugu">Telugu</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-3">
          <button type="submit" className="primary-button">
            <Star className="w-4 h-4 inline-block mr-2" />
            Get Reading
          </button>
          <button type="button" className="secondary-button" disabled>
            <MessageSquare className="w-4 h-4 inline-block mr-2" />
            Chat (Coming Soon)
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;
