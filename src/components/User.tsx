import React from "react";
import Meta from "@/components/Meta";
import { LoaderFunction, useLoaderData, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { useQueryParams } from "@/hooks/use-query-params";
import { Excel } from "@/components/core/excel-uploader";
import TableData from "./components/TableData";
import UserService from "@/services/User.service";

interface Props {}

const UserQuery = ({ name, page }: { name: string; page: string }) => ({
    queryKey: ["User", { name, page }],
    queryFn: async () => {
        return await UserService.all({ name, page });
    },
});

const UserLoader =
    (queryClient: any): LoaderFunction =>
    async ({ request }) => {
        const url = new URL(request.url);
        const name = url.searchParams.get("name") ?? "";
        const page = url.searchParams.get("page") ?? "";

        const query = UserQuery({ name, page });
        return queryClient.ensureQueryData(query);
    };

const User: React.FC<Props> = () => {
    const navigate = useNavigate();
    const { name } = useQueryParams();
    const { User, ...pagination } = useLoaderData() as any;

    return (
        <React.Fragment>
            <Meta title="User" />
            <div>
                <div className="max-w-7xl mx-auto p-8">
                    <h1 className="text-2xl font-semibold mb-2">User:</h1>
                    <div className="py-4">
                        <Excel />
                    </div>
                    <TableData rows={ User } pagination={pagination} query={name} />
                    <Button color="secondary" onClick={() => navigate(-1)} className="mt-6">
                        Back
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
};

export { User, UserLoader };