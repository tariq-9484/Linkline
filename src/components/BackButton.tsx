import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useMemo } from "react";

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const breadcrumbs = useMemo(() => {
    // Remove trailing slash and split path
    const pathSegments = location.pathname.replace(/\/$/, "").split("/").filter(Boolean);
    
    return pathSegments.map((segment, index) => {
      const path = "/" + pathSegments.slice(0, index + 1).join("/");
      // Convert path segments to readable labels (e.g., "my-category" -> "My Category")
      const label = segment
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      
      return { label, path };
    });
  }, [location]);

  return (
    <nav className="flex items-center space-2 p-2">
     
      
      {breadcrumbs.length > 0 && (
        <div className="flex items-center space-x-2 ml-2">
          <ChevronRight size={18} className="text-gray-400" />
          <div className="flex items-center space-x-2">
            {breadcrumbs.map((item, index) => (
              <div key={item.path} className="flex items-center space-x-2">
                {index > 0 && (
                  <ChevronRight size={18} className="text-gray-400" />
                )}
                <button
                  onClick={() => navigate(item.path)}
                  className="text-[#4A69C1] hover:text-[#6A88D0] font-medium text-lg
                  transition-colors duration-200 hover:underline"
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}