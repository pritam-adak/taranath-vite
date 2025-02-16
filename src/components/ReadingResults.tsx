
import React from "react";
import { ArrowLeft, Hand, Calendar, Star as StarIcon, TrendingUp, Heart, Brain, LineChart, Plane, DollarSign } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ReadingResultsProps {
  onBack: () => void;
  data: {
    name: string;
    dateOfBirth: string;
    rashi: string;
    summary: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
}

const ReadingResults = ({ onBack, data }: ReadingResultsProps) => {
  return (
    <div className="fixed inset-0 bg-mystic-100/95 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="max-w-2xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button 
            onClick={onBack}
            className="text-mystic-600 hover:text-mystic-700 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-mystic-600 text-center flex-1 -ml-6">
            Your Reading
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          {/* Palm Reading Card */}
          <div className="bg-white rounded-2xl shadow-lg p-4 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-mystic-100">
              <div className="w-10 h-10 rounded-full bg-mystic-100 flex items-center justify-center">
                <Hand className="w-5 h-5 text-mystic-500" />
              </div>
              <h2 className="text-xl font-semibold text-mystic-600">Palm Reading</h2>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="text-mystic-600 font-medium">{data.name}</div>
              <div className="flex items-center gap-2 text-mystic-500">
                <Calendar className="w-4 h-4" />
                {data.dateOfBirth}
              </div>
              <div className="flex items-center gap-2 text-mystic-500">
                <StarIcon className="w-4 h-4" />
                {data.rashi}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-mystic-50 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-mystic-100 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-mystic-500" />
                </div>
                <p className="text-mystic-600 text-sm leading-relaxed">
                  {data.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Collapsible Sections */}
          <div className="space-y-2">
            {data.sections.map((section, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-mystic-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-mystic-100 flex items-center justify-center">
                      {index === 0 && <LineChart className="w-5 h-5 text-mystic-500" />}
                      {index === 1 && <Heart className="w-5 h-5 text-mystic-500" />}
                      {index === 2 && <Brain className="w-5 h-5 text-mystic-500" />}
                      {index === 3 && <LineChart className="w-5 h-5 text-mystic-500" />}
                      {index === 4 && <DollarSign className="w-5 h-5 text-mystic-500" />}
                      {index === 5 && <Plane className="w-5 h-5 text-mystic-500" />}
                      {index === 6 && <StarIcon className="w-5 h-5 text-mystic-500" />}
                    </div>
                    <span className="flex-1 text-left font-medium text-mystic-600">
                      {section.title}
                    </span>
                    <ChevronIcon className="w-5 h-5 text-mystic-400" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-4 py-3 mt-1 bg-white rounded-xl">
                    <p className="text-mystic-600 text-sm leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Chevron icon component for the collapsible sections
const ChevronIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M6 9L12 15L18 9" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default ReadingResults;
