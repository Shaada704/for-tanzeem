                    generatedLink
                      ? 'border-none cursor-default font-bold text-[#3D2B1F]'
                      : 'focus:text-[#3D2B1F] focus:outline-none border-b-2 border-dashed border-[#E8DDD3] focus:border-[#C87E6F]'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Area */}
        <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgba(160,100,80,0.06)] border border-white/60">
          {!generatedLink ? (
            <div className={`flex flex-col ${isWhatsAppEnabled ? 'sm:flex-row' : ''} gap-4`}>

              {/* Send as WhatsApp Surprise */}
              {isWhatsAppEnabled && (
                <button
                  onClick={handleOpenSurpriseModalFromEditor}
                  disabled={isGenerateDisabled}
                  className="flex-1 relative overflow-hidden group bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-5 rounded-full font-bold tracking-wide text-sm transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_10px_25px_rgba(18,140,126,0.3)] hover:shadow-[0_15px_30px_rgba(18,140,126,0.4)] flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span className="text-lg">💐</span>
                  <span className="relative z-10">Send as a WhatsApp Surprise</span>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                </button>
              )}

              {/* Generate Gift Link */}
              <button
                onClick={handleGenerateLink}
                disabled={isGenerateDisabled}
                className={`${isWhatsAppEnabled ? 'flex-1' : 'w-full'} relative overflow-hidden group bg-[#3D2B1F] text-white px-8 py-5 rounded-full font-bold tracking-widest uppercase text-sm transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_10px_20px_rgba(61,43,31,0.3)] hover:shadow-[0_15px_30px_rgba(61,43,31,0.4)] flex items-center justify-center gap-2 cursor-pointer`}
              >
                <span className="relative z-10">
                  {isSaving ? 'Preparing Your Gift...' : 'Create Gift Link'}
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
              </button>
            </div>
          ) : (
            <div className="text-center w-full animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">

              <div className="inline-flex items-center gap-2 bg-[#E8F3E9] text-[#849F86] px-4 py-1.5 rounded-full text-xs font-bold mb-1">
                <span>✓</span>
                <span>Your gift is ready to share</span>
              </div>

              {/* Link Copy Bar */}
              <div className="flex items-center bg-[#FFFDF9] border border-[#E8DDD3] rounded-2xl overflow-hidden shadow-inner p-1.5">
                <button
                  onClick={handleCopyLink}
                  className={`px-8 py-4 text-xs font-bold tracking-widest uppercase text-white rounded-xl transition-all duration-300 min-w-[140px] shadow-sm ${
                    isCopied ? 'bg-[#849F86] hover:bg-[#728A74]' : 'bg-[#C87E6F] hover:bg-[#B56E5F]'
                  }`}
                >
                  {isCopied ? 'Copied ✓' : 'Copy Link'}
                </button>

                <input
                  type="text"
                  readOnly
                  value={generatedLink}
                  className="flex-1 p-4 text-sm text-[#8A7A6F] bg-transparent outline-none text-left font-mono"
                  dir="ltr"
                />
              </div>

              <div className={`grid grid-cols-1 ${isWhatsAppEnabled ? 'sm:grid-cols-2' : ''} gap-3 pt-2`}>

                {/* Send via WhatsApp */}
                {isWhatsAppEnabled && (
                  <button
                    onClick={handleOpenSurpriseModalFromEditor}
                    className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-3.5 px-5 rounded-2xl font-bold text-xs tracking-wide transition-all shadow-[0_8px_20px_rgba(18,140,126,0.25)] hover:shadow-[0_12px_28px_rgba(18,140,126,0.35)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>💌</span>
                    <span>Send as a WhatsApp Surprise</span>
                  </button>
                )}

                {/* Create Another Bouquet */}
                <button
                  onClick={() => {
                    setIsDrafting(false);
                    setSelectedBouquet(null);
                    setGeneratedLink('');
                    setCurrentShortId('');
                    setRecipient('');
                    setMessage('');
                    setSender('');
                    setIsCopied(false);
                  }}
                  className="bg-[#3D2B1F] hover:bg-black text-white py-3.5 px-5 rounded-2xl font-bold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>🌸</span>
                  <span>Create Another Bouquet</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )}

    {/* VIEW 3: SENT GIFTS HISTORY */}
    {!isDrafting && sentGifts.length > 0 && (
      <div className="max-w-6xl mx-auto mt-32 relative z-10 animate-in fade-in duration-1000 mb-20">

        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="w-12 h-px bg-[#D4B5A8]"></span>

          <h2 className="text-2xl font-serif text-[#3D2B1F] tracking-wide">
            Your Gift History
          </h2>

          <span className="w-12 h-px bg-[#D4B5A8]"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sentGifts.map((gift) => (
            <div
              key={gift.id}
              className="bg-white/40 backdrop-blur-xl p-6 rounded-[2rem] shadow-sm border border-white/60 flex flex-col transition-all hover:bg-white/60 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-4">

                <div>
                  <p className="text-[10px] text-[#C87E6F] font-bold uppercase tracking-widest mb-1">
                    {gift.flowerName}
                  </p>

                  <p className="font-serif text-lg text-[#3D2B1F]">
                    To: {gift.recipient}
                  </p>
                </div>

                <span className="text-xs text-[#8A7A6F] font-light">
                  {new Date(gift.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>

              </div>

              <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-[#E8DDD3]/50">

                <div className="flex gap-2">

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${window.location.origin}/gift/${gift.id}`
                      );
                      alert('Gift link copied successfully!');
                    }}
                    className="flex-1 bg-transparent hover:bg-[#FDFBF7] text-[#849F86] border border-[#849F86]/30 px-3 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-colors shadow-sm"
                  >
                    Copy Link
                  </button>

                  <a
                    href={`/gift/${gift.id}`}
                    target="_blank"
                    className="flex-1 flex justify-center items-center bg-[#C87E6F] hover:bg-[#B56E5F] text-white px-3 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-colors shadow-sm"
                  >
                    View Gift
                  </a>

                </div>

                {/* Send via WhatsApp */}
                {isWhatsAppEnabled && (
                  <button
                    onClick={() => handleOpenSurpriseModalFromHistory(gift)}
                    className="w-full bg-[#FAF5F0] hover:bg-[#E8F3E9] text-[#128C7E] border border-[#128C7E]/20 py-2.5 px-3 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Send as a WhatsApp Surprise 💐</span>
                  </button>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Surprise Delivery via WhatsApp Modal */}
