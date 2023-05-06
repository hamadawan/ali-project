import Link from "next/link";
import {GlobeAltIcon, UserCircleIcon} from "@heroicons/react/solid";
import * as React from "react";
import {useCurrentUserQuery} from "@/graphql/queries/useCurrentUserQuery";

const SignUpIcon = () => {
  const { data } = useCurrentUserQuery();

  return (
    <p>
      <Link href="/signup" className="flex">
        { !data?.currentUser && (
          <span>Sign Up</span>
          )}
        <UserCircleIcon className="h-6 px-2" />
      </Link>
    </p>
  )
}

export default SignUpIcon;
