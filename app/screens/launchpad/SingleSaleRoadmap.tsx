import type { TokenSale } from "@/.graphclient";
import { useIPFSGetMetadata } from "@/hooks/ipfs";
import { isNil } from "lodash";
import { ThreeCircles } from "react-loader-spinner";

interface SingleSaleRoadmapProps {
  data: TokenSale;
}

export default function SingleSaleRoadmap({ data }: SingleSaleRoadmapProps) {
  const { metadata, isLoading, error } = useIPFSGetMetadata(data.metadataURI);
  return (
    <div className="flex flex-col justify-start items-start px-1 py-1 lg:py-3 lg:px-3 w-full overflow-auto gap-7">
      {isLoading || !isNil(error) ? (
        <div className="flex w-full justify-center items-center">
          <ThreeCircles color="#fff" width={60} />
        </div>
      ) : (
        <>
          <span className="font-[400] text-sm lg:text-xl capitalize">roadmap</span>
          <article
            className="prose w-full max-w-none prose-slate lg:prose-lg prose-sm break-all prose-a:break-all prose-a:text-[#0029ff] text-[#d9d9d9]"
            dangerouslySetInnerHTML={{
              __html: metadata?.roadmap || ""
            }}
          />
        </>
      )}
    </div>
  );
}
