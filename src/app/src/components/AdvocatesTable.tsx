import { Advocate } from '../types/Advocate';

interface AdvocatesTableProps {
  advocates: Advocate[];
  onSpecialtyClick: (specialty: string) => void;
}

export function AdvocatesTable({ advocates, onSpecialtyClick }: AdvocatesTableProps) {
  return (
    <>
      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left">First Name</th>
              <th className="px-4 py-2 text-left">Last Name</th>
              <th className="px-4 py-2 text-left">City</th>
              <th className="px-4 py-2 text-left">Degree</th>
              <th className="px-4 py-2 text-left">Specialties</th>
              <th className="px-4 py-2 text-left">Years of Experience</th>
              <th className="px-4 py-2 text-left">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {advocates.map((advocate) => (
              <tr key={advocate.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{advocate.firstName}</td>
                <td className="px-4 py-2">{advocate.lastName}</td>
                <td className="px-4 py-2">{advocate.city}</td>
                <td className="px-4 py-2">{advocate.degree}</td>
                <td className="px-4 py-2">
                  {advocate.specialties.map((specialty, index) => (
                    <button
                      key={`${advocate.id}-${specialty}-${index}`}
                      onClick={() => onSpecialtyClick(specialty)}
                      className="inline-block bg-gray-100 text-blue-800 text-sm px-2 py-1 rounded mr-1 mb-1 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {specialty}
                    </button>
                  ))}
                </td>
                <td className="px-4 py-2">{advocate.yearsOfExperience}</td>
                <td className="px-4 py-2">{advocate.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
} 