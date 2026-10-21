import React, { useState } from 'react';
import { Sliders, RotateCcw, Check, Sparkles } from 'lucide-react';
import { SKILLS as INITIAL_SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [skills, setSkills] = useState<SkillItem[]>(INITIAL_SKILLS);
  const [activeTab, setActiveTab] = useState<'All' | 'CMS & Builders' | 'Frontend Core' | 'Optimization & Tools'>('All');
  const [isEditMode, setIsEditMode] = useState(false);

  const handleLevelChange = (skillName: string, newLevel: number) => {
    setSkills((prev) =>
      prev.map((s) => (s.name === skillName ? { ...s, level: newLevel } : s))
    );
  };

  const handleReset = () => {
    setSkills(INITIAL_SKILLS);
    setIsEditMode(false);
  };

  const filteredSkills = skills.filter((skill) => {
    if (activeTab === 'All') return true;
    return skill.category === activeTab;
  });

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#FAF8F5] relative border-t border-[#EFE8EC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Category Tabs & Edit Mode Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C97A8E] block mb-2">
              TECHNICAL EXPERTISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2E1325] tracking-tight font-medium">
              My Skills & Proficiencies
            </h2>
            <div className="w-12 h-[2px] bg-[#C97A8E] mt-4 mb-4" />
            <p className="text-sm sm:text-base text-[#6E5767] leading-relaxed">
              Every skill listed represents hands-on, commercial client experience over the past 3 years. No inflated buzzwords or speculative tool claims.
            </p>
          </div>

          {/* Interactive Controls: Filter Tabs + Calibration Mode */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Functional Category Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-[#F1EAEF] rounded-xl border border-[#E6DBE3]">
              {(['All', 'CMS & Builders', 'Frontend Core', 'Optimization & Tools'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    activeTab === tab
                      ? 'bg-white text-[#2E1325] shadow-xs font-semibold'
                      : 'text-[#6F5768] hover:text-[#2E1325]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Toggle Edit Calibration Mode */}
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                isEditMode
                  ? 'bg-[#34152B] text-white border-[#34152B]'
                  : 'bg-white text-[#4D3847] border-[#E3D7DE] hover:bg-[#FAF4F7]'
              }`}
              title="Click to adjust skill levels interactively"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{isEditMode ? 'Done Calibrating' : 'Adjust Levels'}</span>
            </button>

            {isEditMode && (
              <button
                onClick={handleReset}
                className="p-2 text-xs font-medium text-[#7C6675] hover:text-[#2E1325] bg-white rounded-xl border border-[#E3D7DE] transition-colors cursor-pointer"
                title="Reset to default levels"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {isEditMode && (
          <div className="mb-8 p-4 rounded-xl bg-[#FAF0F4] border border-[#ECD1DC] text-xs text-[#6F3A4C] flex items-center justify-between animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C97A8E] shrink-0" />
              <span>
                <strong>Interactive Mode Active:</strong> Drag sliders below to test or calibrate proficiency percentages. All changes update in real time.
              </span>
            </div>
            <button
              onClick={handleReset}
              className="underline hover:text-[#2E1325] cursor-pointer ml-4 shrink-0 font-medium"
            >
              Reset to Defaults
            </button>
          </div>
        )}

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Header: Skill Name & Category */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-xl font-semibold text-[#2E1325] group-hover:text-[#C97A8E] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] font-medium text-[#7C6675] tracking-wide whitespace-nowrap">
                    {skill.yearsOfUse}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#7C6675] mb-4">
                  <span>{skill.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums font-semibold text-[#34152B]">
                    {skill.level}%
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-[#5E4757] leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar / Slider */}
              <div>
                <div className="relative w-full h-2 rounded-full bg-[#EFE8EC] overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-[#D48B9D] to-[#9587B6] rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Editable Slider when Calibration Mode is On */}
                {isEditMode ? (
                  <div className="mt-3 pt-3 border-t border-[#F3ECEF] flex items-center gap-3">
                    <input
                      type="range"
                      min="40"
                      max="100"
                      value={skill.level}
                      onChange={(e) => handleLevelChange(skill.name, parseInt(e.target.value, 10))}
                      className="w-full h-1.5 bg-[#E8DDE4] rounded-lg appearance-none cursor-pointer accent-[#C97A8E]"
                    />
                    <span className="font-mono text-xs tabular-nums text-[#34152B] w-8 text-right font-medium">
                      {skill.level}%
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-[11px] text-[#8C7685]">
                    <span>Foundation</span>
                    <span className="inline-flex items-center gap-1 font-medium text-[#528767]">
                      <Check className="w-3 h-3" />
                      Production Ready
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
