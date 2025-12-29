export default function Accommodation() {
  return (
    <section id="accommodation" className="min-h-screen px-6 scroll-mt-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-2 text-primary mb-10">Accomodation</h2>
        {/* ================= DESKRIPSI ================= */}
        <p>
          Please be informed that participants and representatives from SEAMEO
          member countries and representatives sponsored by SEAMEO CECCEP will
          automatically be accommodated at the Higher Hotel.
        </p>

        <ol className="list-decimal pl-8 space-y-1 mt-2">
          <li>
            Room rates are quoted in Dolars Amerika (US) and are charged per
            night.
          </li>
          <li>
            Any personal expenses not covered in the initial fees, including
            additional dining, room service, laundry, or similar services, will
            be the responsibility of the participants.
          </li>
          <li>
            Transportation (including airport, hotel, and meeting venue) will be
            arranged to the participants staying at the selected hotels stated:
            The Empire Hotel, The Rizqun International Hotel, J Hotel & Higher
            Hotel.
          </li>
          <li>
            Participants who choose to stay at a different hotel than those
            stated above, will be responsible for arranging their own
            transportation during their entire stay.
          </li>
        </ol>

        <p className="py-3">
          If you are staying near any of the designated hotels and wish to join
          the arranged transport, you may proceed to the hotels to avail of this
          service. Please inform any of the SEAMEO CECCEP staff to ensure that
          you will not be left behind.
        </p>

        {/* HOTEL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CARD 1 */}
          <div className="rounded-xl border border-border bg-background overflow-hidden">
            <img
              src="/hotel/fairmont.jpg"
              alt="Hotel"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="font-bold text-lg mb-2">Royal Heritage Hotel</h2>
              <p className="text-muted-foreground text-sm mb-4">
                5 minutes from venue · Breakfast included
              </p>
              <p className="font-semibold text-sm">IDR 850.000 / night</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl border border-border bg-background overflow-hidden">
            <img
              src="/hotel/hotel1.png"
              alt="Hotel"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="font-bold text-lg mb-2">Green Palm Resort</h2>
              <p className="text-muted-foreground text-sm mb-4">
                10 minutes from venue · Swimming pool
              </p>
              <p className="font-semibold text-sm">IDR 720.000 / night</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl border border-border bg-background overflow-hidden">
            <img
              src="/hotel/hotel1.png"
              alt="Hotel"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="font-bold text-lg mb-2">Green Palm Resort</h2>
              <p className="text-muted-foreground text-sm mb-4">
                10 minutes from venue · Swimming pool
              </p>
              <p className="font-semibold text-sm">IDR 720.000 / night</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="rounded-xl border border-border bg-background overflow-hidden">
            <img
              src="/hotel/hotel1.png"
              alt="Hotel"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="font-bold text-lg mb-2">Green Palm Resort</h2>
              <p className="text-muted-foreground text-sm mb-4">
                10 minutes from venue · Swimming pool
              </p>
              <p className="font-semibold text-sm">IDR 720.000 / night</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
